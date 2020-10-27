'use strict';

var response = require('./res')
var connection = require('./koneksi')

exports.index = function (rec, res){
    response.ok('REST API Executed')
}