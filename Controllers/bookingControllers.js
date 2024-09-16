const Tour = require('../models/tourModel');

const catchAsync = require('../Utils/catchAsync');

const AppError = require('../Utils/appError');

const factory = require('./handlerFactory');

const Razorpay = require('razorpay');

exports.getChecoutSession = catchAsync(async (req, res, next) => {
  // 1)  Get the currently booked tour
  const tour = await Tour.findById(req.params.tourID);
  // 2) Create checkout session

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
  });

  const options = req.body;
  const order = await razorpay.orders.create(options);

  if (!order) {
    return res.status(500).send('Error');
  }

  res.json(order);

  // 3) Create session as response
});
