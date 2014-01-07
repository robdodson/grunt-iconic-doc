# grunt-iconic-doc

> Extract yaml documentation from an iconic svg and convert it to json

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

## Writing your docs in YAML

This plugin expects your documentation to be written in [YAML](http://www.yaml.org/) and stored in a `script` tag. Take a look at the `test/fixtures` directory for more examples.

#### Example

``` html
<script class="iconic-documentation" type="text/x-iconic-doc">
data-attributes:
  data-direction:
    default: right
    options:
      - right
      - top
      - left
      - bottom
      - top-right
      - top-left
      - bottom-right
      - bottom-left
    description: The direction of the arrow
  data-arrow-head:
    default: fill
    options:
      - fill-accute
      - fill-oblique
      - fill-angled
      - fill-large
      - fill-large-accute
      - fill-large-oblique
      - fill-large-angled
      - line
      - line-accute
      - line-oblique
      - line-large
      - line-large-accute
      - line-large-oblique
    description: The arrow head style
</script>
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

### Options

#### selector

Default: `.iconic-documentation`  
Type: `String`

The task will attempt to extract its documentation from an element that matches this selector.

```js
svgmerge: {
  files: {
    src: ['icons'],
    dest: 'icons-out',
    options: {
      selector: '#foo-docs'
    }
  }
}
```

#### outputFile

Default: `api.json`  
Type: `String`

The filename that will be used when the documentation is output.

```js
svgmerge: {
  files: {
    src: ['icons'],
    dest: 'icons-out',
    options: {
      outputFile: 'my-docs.json'
    }
  }
}
```

## License
Copyright (c) 2014 Rob Dodson. Licensed under the MIT license.
