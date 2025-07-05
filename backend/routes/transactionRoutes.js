const express = require('express');
const router = express.Router();
const {
  createTransaction,
  getRecentTransactions,getTransactionById
} = require('../controllers/transactionController');





router.get('/transaction/:id', getTransactionById);
router.post('/transaction', createTransaction);
router.get('/transactions', getRecentTransactions);


module.exports = router;
