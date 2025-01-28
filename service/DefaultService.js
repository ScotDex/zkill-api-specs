'use strict';


/**
 * Fetch historical killmails
 * Retrieve the killID and hash for all killmails on a specific date. The date must be in the format YYYYMMDD. 
 *
 * date String The date for which to retrieve killmail history.
 * returns List
 **/
exports.historyDate_jsonGET = function(date) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "killID" : 0,
  "hash" : "hash"
}, {
  "killID" : 0,
  "hash" : "hash"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch killmails
 * Retrieve killmails from the database with optional filters.
 *
 * wSpace Boolean Filter for wormhole space kills. (optional)
 * solo Boolean Filter for solo kills. (optional)
 * pastSeconds Integer Fetch kills from the past x seconds (max 604800, multiples of 3600). (optional)
 * iskValue BigDecimal Minimum ISK value for kills. (optional)
 * returns List
 **/
exports.killsGET = function(wSpace,solo,pastSeconds,iskValue) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "killID" : 0,
  "value" : 6.027456183070403,
  "hash" : "hash"
}, {
  "killID" : 0,
  "value" : 6.027456183070403,
  "hash" : "hash"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch statistics for an entity
 * Retrieve statistics for a specific entity, including kills, ranks, ship classes,  monthly counts, and more. 
 *
 * entityType String The type of entity (e.g., characterID, corporationID, allianceID, etc.).
 * entityID Integer The unique ID of the entity (valid CCP ID).
 * returns inline_response_200
 **/
exports.statsEntityTypeEntityIDGET = function(entityType,entityID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "kills" : 0,
  "ranks" : {
    "key" : 6
  },
  "monthlyCounts" : {
    "key" : 1
  },
  "shipClasses" : [ "shipClasses", "shipClasses" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

