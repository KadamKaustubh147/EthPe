const Transaction = require('../models/transaction');

const createTransaction = async (req, res) => {
  try {
    const { senderId, receiverId, amount } = req.body;

    const newTx = await Transaction.create({
      sender: senderId,
      receiver: receiverId,
      amount
    });

    res.status(201).json({ message: "Transaction saved", transaction: newTx });
  } catch (err) {
    res.status(500).json({ error: "Transaction failed", details: err.message });
  }
};

const getRecentTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .populate('sender', 'name email')
      .populate('receiver', 'name email');

    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch transactions", details: err.message });
  }
};

const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id)
      .populate('sender', 'name email')
      .populate('receiver', 'name email');

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch transaction', details: err.message });
  }
};


module.exports = {
  createTransaction,
  getRecentTransactions,getTransactionById
};
