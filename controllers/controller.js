const Job = require('./../models/jobsModel')
const Condidate = require('./../models/candidateModel');




exports.getinfo = async (req, res) => {

    const job = await Job.findOne();

    let condition = [];
    job.requiredTechnologies.forEach(technology => {
        condition.push({ $eq: ["$$this.title", `${technology.title}`] })
    });

    const info = await Condidate.aggregate([

        {
            $addFields: {
                matchingTechs: {
                    $filter: {
                        input: "$technologies",
                        cond: {
                            $or: condition
                        }
                    }
                }
            }

        },
        {
            $match:{
                matchingTechs: { $not: {$size: 0} }
            }
        },

        {
            $project:{
                name: 1,
                number:1,
                matchingTechs:1
            }
        }

    ]);



    res.status(200).json({
        status: "success",
        data: info
    });
}

exports.createJob = async (req, res, next) => {
    const newJob = await Job.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            job: newJob
        }
    });
};


exports.createCondidate = async (req, res, next) => {
    const newCondidate = await Condidate.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            condidate: newCondidate
        }
    });
};