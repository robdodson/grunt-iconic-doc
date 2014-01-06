# grunt-iconic-doc

> Extract json documentation from an iconic svg

[![Build Status](https://secure.travis-ci.org/robdodson/grunt-iconic-doc.png?branch=master)](http://travis-ci.org/robdodson/grunt-iconic-doc)

## Getting Started
This plugin requires Grunt ~0.4.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-iconic-doc --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-iconic-doc');
```

## Configuration

To configure the task just pass in a `src` directory, with subfolders for each icon and a `dest` directory. If you omit the `dest` directory, then the json will be generated in the same folder as the `src`.

``` js
iconicdoc: {
  files: {
    src: ['icons'],
    dest: 'icons-out'
  }
}
```

## License
Copyright (c) 2014 Rob Dodson. Licensed under the MIT license.
