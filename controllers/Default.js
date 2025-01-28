'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.historyDate_jsonGET = function historyDate_jsonGET (req, res, next, date) {
  Default.historyDate_jsonGET(date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.killsGET = function killsGET (req, res, next, wSpace, solo, pastSeconds, iskValue) {
  Default.killsGET(wSpace, solo, pastSeconds, iskValue)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.statsEntityTypeEntityIDGET = function statsEntityTypeEntityIDGET (req, res, next, entityType, entityID) {
  Default.statsEntityTypeEntityIDGET(entityType, entityID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
