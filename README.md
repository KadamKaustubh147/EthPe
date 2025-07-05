
---

# 🌐 EthPe – UPI-style Ethereum Transaction App

**EthPe** is a secure and user-friendly mobile app that enables **Ethereum-based transactions** similar to UPI. It allows users to register, log in, scan QR codes to send/receive ETH, and check their wallet balance securely.

---

## 📱 Features

* 🔐 User Authentication (Register/Login/Logout)
* 📤 Secure ETH Transactions via Smart Contract
* 📥 Receive ETH using QR Scanner
* 👛 View Real-time Wallet Balance
* 🧾 Transaction History Support (via backend)
* 🛡️ ReentrancyGuard to ensure smart contract security

---

## 🧩 Tech Stack

### ✅ Frontend – React Native (Expo)

* QR Code Scanner Integration
* Web3 wallet interaction
* Located at: `frontend/EthPe/`

### ✅ Backend – Node.js + Express.js

* MongoDB with Mongoose
* JWT Authentication
* Password hashing using bcrypt
* Located at: `backend/`

### ✅ Smart Contracts – Solidity (via Remix IDE)

* `Eth_Upi.sol` inside the `Contract/` directory
* Uses **ReentrancyGuard** for secure ETH transfers

---

## 🔐 Security Highlights

* 🧂 Passwords hashed using bcrypt
* 🔒 JWT tokens for session management
* 🧱 ReentrancyGuard for secure smart contracts
* 🎯 Backend validations and middleware checks

---

## 📁 Project Structure

```
EthPe/
├── backend/                # Express.js server and APIs
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── index.js
│
├── frontend/
│   └── EthPe/              # React Native frontend app
│
├── Contract/
│   └── Eth_Upi.sol         # Smart Contract written in Solidity
│
├── node_modules/           # Server-side dependencies
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/KadamKaustubh147/EthPe.git
cd EthPe
```

### 2. Setup Backend

```bash
cd backend
npm install
npm start
```

Create a `.env` file with:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 3. Setup Frontend (Expo)

```bash
cd frontend/EthPe
npm install
npx expo start
```

Make sure you have the **Expo Go** app on your mobile device to scan the QR and test the app.

---

## 🧠 Smart Contract Details

* **Location**: `Contract/Eth_Upi.sol`
* Built using **Solidity**
* Deployed/tested using **Remix IDE**
* Uses **ReentrancyGuard** from OpenZeppelin for safety

---

## 🔁 Example API Routes

| Method | Route                           | Description            |
| ------ | ------------------------------- | ---------------------- |
| POST   | `/auth/register`                | Register a new user    |
| POST   | `/auth/login`                   | Login existing user    |
| GET    | `/transaction/balance/:address` | Get ETH wallet balance |
| POST   | `/transaction/send`             | Send ETH securely      |

---

## ✅ Future Improvements

* ERC-20 token support
* Push notifications
* Wallet transaction history
* In-app user feedback/reporting

---

## 🛡 License

This project is licensed under the [MIT License](LICENSE)

---

## 🙌 Contributing

We welcome contributions! Please fork the repo and submit pull requests.
For major changes, create an issue first to discuss what you want to change.

---

Built with 💙 by the EthPe team

---

