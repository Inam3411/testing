const mongoose = require('mongoose');


const jobsSchema = new mongoose.Schema(
  {
    title: String,
    requiredTechnologies:[{
      title: String,
      experience: Number
    }]
    
  });



const Job = mongoose.model('Job', jobsSchema);

module.exports = Job;
