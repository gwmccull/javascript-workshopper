#!/usr/bin/env node

const workshopper = require('workshopper'),
      path        = require('path');


function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : 'javascript-workshopper',
    title       : 'JavaScript Workshopper',
    subtitle    : 'A story-based JavaScript lesson for beginner and novice programmers.',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./exercises/')
})