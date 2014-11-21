/*
    Default options
    ----------------------------------------
*/
"use strict";

var KEY = require('./keys.js');

module.exports = {
    pointer: {
        historySize: 2, // number of pointer events to remember
    },
    trackEase: KEY.EASING.LINEAR,
    tweenTarget: 0
};