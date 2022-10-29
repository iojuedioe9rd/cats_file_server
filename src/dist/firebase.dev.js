"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.auth = void 0;

var _app = require("firebase/app");

require("firebase/auth");

// my web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBxbzTagJPmfidODUorZfP6yaI_wwWYLuU",
  authDomain: "cats-sfs-d.firebaseapp.com",
  databaseURL: "https://cats-sfs-d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cats-sfs-d",
  storageBucket: "cats-sfs-d.appspot.com",
  messagingSenderId: "1008017100879",
  appId: "1:1008017100879:web:9a9148febaa41094735a3a"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig); // Exports

var auth = app.auth;
exports.auth = auth;
var _default = app;
exports["default"] = _default;