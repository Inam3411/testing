const mongoose = require('mongoose');


const condidatesSchema = new mongoose.Schema(
  {
    name: String,
    number: Number,
    technologies:[{
      title: String,
      experience: Number
    }]
    
  });



const Condidate = mongoose.model('Condidate', condidatesSchema);

module.exports = Condidate;