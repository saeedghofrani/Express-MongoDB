"use strict";
const createError = require('http-errors');
const express = require('express');
//Import the mongoose module
const mongoose = require('mongoose');
const path = require('path');
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
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/ester';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', () => console.log('MongoDB connected'));
db.on('disconnected', () => console.log('MongoDB disconnected!'));
app.use('/', appRouter);
// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });
// error handler
// app.use(function (res, req) {
// set locals, only providing error in development
// res.locals.message = err.message;
// res.locals.error = req.app.get('env') === 'development' ? err : {};
// render the error page
// res.status(err.status || 500);
//   res.render('error');
//   req.accepts('html') ? res.render('notFound') : req.accepts('json') ? res.send({ error: 'Not found' }) : res.type('txt').send('Not found');
// });
app.use((req, res) => {
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(404);
  req.accepts('html') ? res.render('error') : req.accepts('json') ? res.send({ error: 'Not found' }) : res.type('txt').send('Not found');
});
module.exports = app;