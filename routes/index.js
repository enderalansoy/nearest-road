const express = require('express');
const axios = require('axios');
const moment = require('moment');
const MAPS_API_KEY = 'AIzaSyCExsA0cQ9NF5O2KFcguJogK0K7yAs3RqQ';

const router = express.Router();

router.get('/point', (req, res, next) => {
  const lat = req.query.lat;
  const lng = req.query.lng;
  axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${lat},${lng}&destination=${lat},${lng}&mode=driving&key=${MAPS_API_KEY}`)
    .then(response => res.json({
        status: response.data.status,
        lat: response.data.routes[0].bounds.northeast.lat,
        lng: response.data.routes[0].bounds.northeast.lng,
        date: moment(),
    })).catch(error => res.json(error));
});

module.exports = router;
