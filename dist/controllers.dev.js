"use strict";

var Contact = require('./Contact');

exports.getAllContacts = function (req, res) {};

exports.createContact = function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      phone = _req$body.phone,
      email = _req$body.email;
  var contact = new Contact({
    name: name,
    phone: phone,
    email: email
  });
  contact.save().than(function (c) {
    res.json(c);
  })["catch"](function (err) {
    return console.log(err);
  });
  res.json;
};

exports.deleteContactById = function (req, res) {};

exports.updateContactById = function (req, res) {};

exports.findContactById = function (req, res) {};