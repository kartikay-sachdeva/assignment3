let mongoose = require('mongoose');

let assignModel = mongoose.Schema({
  Assignment: String,
  Description: String,
  DueDate: String,
  Status: String,
  },
  {
      collection: "List"
  }
);

module.exports = mongoose.model('Assignment', assignModel);
