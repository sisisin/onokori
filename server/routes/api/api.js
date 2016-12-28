const api = require('express').Router();
const update = require('./update');
const profile = require('./profile');
const circle = require('./circle');
const event = require('./event');
const copy = require('./copy');

api.post('/update', update.post);

api.get('/profile', profile.get);

api.param('circle_id', circle.param);
api.get('/circle', circle.get);
api.post('/circle', circle.post);
api.put('/circle/:circle_id', circle.put);

api.param('event_id', event.param);
api.get('/event', event.list);
api.post('/event', event.post);
api.put('/event/:event_id', event.put);
api.delete('/event/:event_id', event.delete);

api.param('copy_id', copy.param);
api.post('/copy', copy.post);
api.put('/copy/:copy_id', copy.put);

module.exports = { api };
