const express = require('express');

const authController = require('../Controllers/authControllers');

const bookingController = require('../Controllers/bookingControllers');

const router = express.Router();

router.post(
  '/checkout-session/:tourID',
  authController.protect,
  bookingController.getChecoutSession,
);

module.exports = router;
    