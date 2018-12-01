const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();
const products = [];

// app.use('/admin', adminRoutes)       admin/add-product => GET
//
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
// This shares data between all users since data resides in the node server
//
exports.products = products;

