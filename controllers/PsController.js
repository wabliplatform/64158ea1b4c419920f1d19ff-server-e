/**
 * The PsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PsService');
const createps = async (request, response) => {
  await Controller.handleRequest(request, response, service.createps);
};

const deleteps = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteps);
};

const getAllps = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllps);
};

const getps = async (request, response) => {
  await Controller.handleRequest(request, response, service.getps);
};

const updateps = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateps);
};


module.exports = {
  createps,
  deleteps,
  getAllps,
  getps,
  updateps,
};
