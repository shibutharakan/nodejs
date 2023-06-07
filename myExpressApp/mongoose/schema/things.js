const mongoose = require('mongoose');
const thingsModel = require('../../models/things');

const thingSchema = mongoose.Schema(thingsModel);

module.exports = mongoose.model('Thing', thingSchema);