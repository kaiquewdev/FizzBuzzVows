#!/usr/bin/env node
var fbzz = require('./fizzbuzz').me;

console.log( fbzz.answareMe( 1, 1000 ).join('\n') );
