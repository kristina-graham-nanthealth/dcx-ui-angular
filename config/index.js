/**
 * This is a function that reads the local.env.json file each time it is called
 * and returns it as a javascript object. Configurable properties should be accessed via this function.
 *
 * Note that best practice would be to set NODE_ENV in whatever calls this function rather
 * than manually passing in a string
 */

var _ = require("lodash");

module.exports = function (env) {
    "use strict";

    var local;
    try {
        local = require("./local.env.json");
    } catch (e) {
        local = {
            "development": {},
            "integration": {},
            "production": {}
        };
    } finally {
        var cacheName = _.find(_.keys(require.cache), function(value) {
            return value.indexOf("config\\local.env.json") !== -1;
        });
        delete require.cache[cacheName];
    }
    var node_env = env || process.env.NODE_ENV || "development";
    return local[node_env];
};
