/*
 * grunt-iconic-doc
 * 
 *
 * Copyright (c) 2014 Rob Dodson
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');
var yaml = require('js-yaml');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('iconicdoc', 'Extract documentation for iconic svgs', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      selector: '.iconic-documentation',
      outputFile: 'api.json'
    });

    var dest = this.data.dest;

    this.data.src.forEach(function (src) {
      grunt.file.recurse(path.join(process.cwd(), src),
        function (abspath, rootdir, subdir, filename) {
          if (!subdir) {
            // TODO: need to write out a warning
            return;
          }

          var $ = cheerio.load(grunt.file.read(abspath));
          var doc = yaml.load($(options.selector).text());
          var json = JSON.stringify(doc, null, 2);
          var outputPath;
          if (dest) {
            outputPath = path.join(
              process.cwd(), dest, subdir, options.outputFile
            );
          } else {
            outputPath = path.join(
              path.dirname(abspath), options.outputFile
            );
          }

          grunt.file.write(outputPath, json);
      });
    });
  });

};
