// import expressStripe from "express";
// import express from "express";
// import corsStripe from "cors";
// import bodyParser from "body-parser";
// import Stripe, { default as stripe } from "stripe";
// import dotenv from "dotenv";
// dotenv.config();
// const express = require("express");
// const appStripe = expressStripe();
// require("dotenv").config;
// const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
// console.log("STRIPE_SECRET_TEST:", process.env.STRIPE_SECRET_TEST);
// const bodyParser = require("body-parser");
// const corsStripe = require("cors");
// appStripe.use(bodyParser.urlencoded({ extended: true}));
// appStripe.use(bodyParser.json());
// appStripe.use(corsStripe());

// appStripe.post("/", corsStripe(), async (req, res) =>{
//     let { amount, id } = req.body;
//     console.log("amount:", amount);
//     console.log("id:", id);
//     try {
//         const payment = await stripe.paymentIntents.create({
//             amount: amount,
//             curency: "EUR",
//             payment_method: id,
//             confirm: true,
//         });
//         res.json({
//             message: "payment reussi",
//             success: true,
//         })
//     } catch(error){
//         console.log("erreur", error);
//         res.json({
//             message: "payment echoue",
//             success: false,
//         })
//     }
// })
// appStripe.listen(process.env.PORT || 5000, ()=>{
//     console.log("server is running on port 5000");
// });