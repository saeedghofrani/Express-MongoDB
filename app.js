"use strict";
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const validator = require('validator');
const appRouter = require('./routes/app.route.js');
const logger = require('morgan');
const morgan = require('morgan');
const app = express();
app.use(morgan('tiny'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', appRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  req.accepts('html') ? res.render('notFound') : req.accepts('json') ? res.send({ error: 'Not found' }) : res.type('txt').send('Not found');
});
module.exports = app;