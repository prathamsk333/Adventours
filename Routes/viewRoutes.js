const express = require('express');

const router = express.Router();

const tourController = require('../Controllers/tourControllers');

const authController = require('../Controllers/authControllers');

router.route('/:slug').get(authController.protect, tourController.getTourView);

module.exports = router;
