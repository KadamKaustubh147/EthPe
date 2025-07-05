const express = require('express');
const router = express.Router();
const {
  createTransaction,
  getRecentTransactions,getTransactionById,
  getTransactionsByUser
} = require('../controllers/transactionController');





router.get('/transaction/:id', getTransactionById);
router.post('/transaction', createTransaction);
router.get('/transactions', getRecentTransactions);
router.get('/transactions/user/:userId', getTransactionsByUser);


module.exports = router;
