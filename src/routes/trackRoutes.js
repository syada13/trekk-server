const express = require('express');
const moongose = require('moongose');
const requireAuth = require('../middlewares/requireAuth');

const Track = moongose.model('Track');