/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Ps } = require('../models/Ps');

/**
* Creates the data
*
* ps Ps data to be created
* returns ps
* */
const createps = ({ ps }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Ps(ps).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* psId String the Id parameter
* no response value expected for this operation
* */
const deleteps = ({ psId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Ps.findOneAndDelete({ _id:psId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllps = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Ps.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* psId String the Id parameter
* returns ps
* */
const getps = ({ psId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Ps.findById(psId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* psId String the Id parameter
* ps Ps data to be updated (optional)
* returns ps
* */
const updateps = ({ psId, ps }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Ps.findOneAndUpdate({ _id:psId },ps).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createps,
  deleteps,
  getAllps,
  getps,
  updateps,
};
