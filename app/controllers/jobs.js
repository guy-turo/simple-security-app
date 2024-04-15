const createJob = (req, res) => {
    res.status(200).json('createJob')
}

const getAllJobs = (req, res) => {
    res.status(200).json('getAllJobs')
}

const getJob = (req, res) => {
    res.status(200).json('getJob')

}

const updateJob = (req, res) => {
    res.status(200).json('updateJob')

}

const deleteJob = (req, res) => {
    res.status(200).json('deleteJob')
}

module.exports = {
    createJob,
    getAllJobs,
    getJob,
    deleteJob,
    updateJob,

}