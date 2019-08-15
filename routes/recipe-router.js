const express = require('express');

const knex = require('knex');
const config = require('../knexfile')
const db = knex(config.development)

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ this: 'is as test' })
})

module.exports = router