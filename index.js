"use strict";
const JWT = require("jsonwebtoken");
const { generateKeyPairSync } = require("crypto");

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 4096,
});

const token = JWT.sign({ userId: 1234, roles: ["user"] }, privateKey, {
  algorithm: "RS256",
  expiresIn: "2 days",
});

console.log(`Signed token::`, token);
JWT.verify(token, publicKey, (error, decode) => {
  console.log(`decode::`, decode);
});
