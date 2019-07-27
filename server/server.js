const express = require('express');
const path = require('path');
const webpack = require('webpack');
const request = require('request');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const axios = require('axios');

const _ = require('lodash');

const webpackConfig = require('../webpack.config');

const isDev = process.env.NODE_ENV !== 'production';
const port  = process.env.PORT || 5000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (isDev) {
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, '../client/public'),
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    res.end();
  });
}

// iTunes Search API
app.use('/searchapi', function(req, res, next) {
  axios.get(`https://itunes.apple.com/search?term=${req.query.searchId}`)
    .then(({ data }) => {
      const apiResponse = data.results;
      const modifiesResponse = [];
      for (let i = 0; i < apiResponse.length; i++) {
        const responseData = {};

        responseData['id'] = apiResponse[i]['trackId'];
        responseData['name'] = apiResponse[i]['collectionName'];
        responseData['artwork'] = apiResponse[i]['artworkUrl100'];
        responseData['genre'] = apiResponse[i]['primaryGenreName'];
        responseData['url'] = apiResponse[i]['trackViewUrl'];
        responseData['kind'] = apiResponse[i]['kind'];

        modifiesResponse.push(responseData);
      }

      const newModifiesResponse = _.groupBy(modifiesResponse, function(item) {
        return item.kind;
      });

      res.send(newModifiesResponse);
    })
})

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }
  console.info('>>> Open http://0.0.0.0:%s/ in your browser.', port);
});

module.exports = app;
