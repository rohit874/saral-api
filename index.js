const express = require('express');
const axios = require('axios');
const app = express();
var cors = require('cors')
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/search/:name', (req, res) => {
  const options = {
      method: 'GET',
      url: `https://api.twitter.com/1.1/users/search.json?q=${req.params.name}&count=10`,
      headers: {
          'Authorization': req.headers.authorization
      }
    };
    axios.request(options).then(function (response) {
      // console.log(response.data);
      res.send(response.data);
    }).catch(function (error) {
      console.error(error);
    });
//   res.send('Hello World!');
});

app.get('/:username', (req, res) => {
    const options = {
        method: 'GET',
        url: `https://api.twitter.com/1.1/users/show.json?screen_name=${req.params.username}`,
        headers: {
            'Authorization': req.headers.authorization
        }
      };
      axios.request(options).then(function (response) {
        // console.log(response.data);
        res.send(response.data);
      }).catch(function (error) {
        console.error(error);
      });
//   res.send('Hello World!');
});

app.get('/users/:usernames', (req, res) => {
  
  const options = {
      method: 'GET',
      url: `https://api.twitter.com/1.1/users/lookup.json?screen_name=${req.params.usernames}`,
      headers: {
          'Authorization': req.headers.authorization
      }
    };
    axios.request(options).then(function (response) {
      // console.log(response.data);
      res.send(response.data);
    }).catch(function (error) {
      console.error(error);
    });
});

app.get('/timeline/:username', (req, res) => {
  
  const options = {
      method: 'GET',
      url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${req.params.username}&count=10`,
      headers: {
          'Authorization': req.headers.authorization
      }
    };
    axios.request(options).then(function (response) {
      // console.log(response.data);
      res.send(response.data);
    }).catch(function (error) {
      console.error(error);
    });
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });