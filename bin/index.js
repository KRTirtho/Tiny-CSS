#!/usr/bin/env node

/* readfile reads all the 'class="...."'  */
const htmlClasses = require("./dist/readfile")
/* matches the classes provided from readfile with classes available in tiny-css */
const matchClasses = require("./dist/match")
/* classes which needs to be matched with readfile classes */
const tinyClasses = require("./dist/classes")
/* cssmatch matches all the available classes in the dest *.css file & keeps only those which aren't already there */
const cssClasses = require("./dist/cssmatch")