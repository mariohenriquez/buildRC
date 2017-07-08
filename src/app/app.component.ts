import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedLint: string;
  csslint: any;
  jshint: any;
  titleCSSLint: boolean;
  titleJSHint: boolean;
  csslintCopy: any;

  constructor() {
    this.selectedLint = 'cssLint';
    this.csslint = this.getDefaultCssLint();
    this.jshint = this.getDefaultJsHint();
  }

  changeLint(lint:string) {
    this.selectedLint = lint;

    if (lint == 'cssLint') {
      this.titleJSHint = false;
      for(let i = 0; i < this.jshint.length; i++){
        this.jshint[i].value = false;
        if (this.jshint[i].type != 'boolean') {
          this.jshint[i].key == 'esversion' ? this.jshint[i].value = 5 : null;
          this.jshint[i].key == 'maxerr' ? this.jshint[i].value = 50 : null;
        }
      }

      this.jshint = this.getDefaultJsHint();
    }

    if (lint != 'cssLint') {
      this.titleCSSLint = false;
      for(let i = 0; i < this.csslint.length; i++){
        this.csslint[i].value = false;
      }
      this.csslint = this.getDefaultCssLint();
    }

  }

  selectAllRules(type: string, event:any) {
    var event = event.target.checked;

    if( type == 'cssLint') {
      for(let i = 0; i < this.csslint.length; i++){
        this.csslint[i].value = event;
      }

    } else {
      for(let i = 0; i < this.jshint.length; i++){
        this.jshint[i].value = event;
        if (this.jshint[i].type != 'boolean') {
          this.jshint[i].key == 'esversion' ? this.jshint[i].value = 5 : null;
          this.jshint[i].key == 'maxerr' ? this.jshint[i].value = 50 : null;
        }
      }

    }
  }

  selectRule(type: string, event:any, index:number) {
    var event = event.target.checked;
    type == 'cssLint' ? this.csslint[index].value = event : null;
    type == 'jsHint' ? this.jshint[index].value = event : null;
  }

  downloadFile(objectExport, filename, buttonId){
    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objectExport));
    document.getElementById(buttonId).setAttribute('href','data:'+data);
    var slug = this.slugify(filename);
    document.getElementById(buttonId).setAttribute('download',slug);
  }

  slugify(string) {
    return string
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }

  exportCsslintRC(){
    var json = this.buildCssJson();
    this.downloadFile(json, '.csslintrc', 'download')
  }

  exportCsslintRecommended(){
    this.csslint = this.getDefaultCssLint()
    var json = this.buildCssJson();
    this.downloadFile(json, '.csslintrc', 'downloadRecommended')
  }

  buildCssJson(){
    var json = {};
    for(let i=0; i < this.csslint.length; i++){
      var rule = this.csslint[i];
      json[rule.key] = rule.value;
    }
    return json;
  }

  exportJslintRC(){
    var json = this.buildJsJson();
    this.downloadFile(json, '.jshintrc', 'download')
  }

  exportJslintRecommended(){
    this.jshint = this.getDefaultJsHint()
    var json = this.buildJsJson();
    this.downloadFile(json, '.jshintrc', 'downloadRecommended')
  }

  buildJsJson(){
    var json = {};
    for(let i=0; i < this.jshint.length; i++){
      var rule = this.jshint[i];
      json[rule.key] = rule.value;
    }
    return json;
  }

  getDefaultCssLint(){
    return [
      { key: "adjoining-classes", value: true, content:'Disallow adjoining classes'},
      { key: "box-model", value: true, content: "Beware of box model size"},
      { key: "box-sizing", value: false, content:'Disallow box-sizing'},
      { key: "bulletproof-font-face", value: true, content:'This rule is aimed at preventing 404 errors in Internet Explorer 8 and earlier due to a bug in how web font URLs are parsed.'},
      { key: "compatible-vendor-prefixes", value: false, content: 'Require compatible vendor prefixes'},
      { key: "display-property-grouping", value: false, content: "Require properties appropriate for display"},
      { key: "duplicate-background-images", value: false, content:'Disallow duplicate background images'},
      { key: "duplicate-properties", value: false, content: "Disallow duplicate properties"},
      { key: "empty-rules", value: true, content:'Disallow empty rules'},
      { key: "fallback-colors", value: false, content:'Require fallback colors'},
      { key: "floats", value: true, content:'Disallow too many floats'},
      { key: "font-faces", value: true, content:"Don't use too many web fonts"},
      { key: "font-sizes", value: true, content:"Don't use too many font-size declarations"},
      { key: "gradients", value: false, content:'Require all gradient definitions'},
      { key: "ids", value: false, content:'Disallow IDs in selectors'},
      { key: "import", value: true, content:'Disallow @import'},
      { key: "important", value: true, content:'Disallow !important'},
      { key: "known-properties", value: false, content:'Require use of known properties'},
      { key: "non-link-hover", value: false, content:'Using :hover pseudo-selector to non-link elements is known to be slow.'},
      { key: "outline-none", value: false, content:'Disallow outline:none'},
      { key: "overqualified-elements", value: false, content:'Disallow overqualified elements'},
      { key: "qualified-headings", value: false, content:'This rule is aimed at finding qualified heading rules, and as such warns when any rule contains a selector where the heading element is last.'},
      { key: "regex-selectors", value: false, content:'Disallow selectors that look like regular expressions'},
      { key: "shorthand", value: true, content:'Require shorthand properties'},
      { key: "star-property-hack", value: false, content:'Disallow star hack'},
      { key: "text-indent", value: true, content:'Disallow negative text-indent'},
      { key: "underscore-property-hack", value: false, content:'Disallow underscore hack'},
      { key: "vendor-prefix", value: false, content:'Require standard property with vendor prefix'},
      { key: "unique-headings", value: true, content:'Headings should only be defined once'},
      { key: "universal-selector", value: false, content:'Disallow universal selector'},
      { key: "unqualified-attributes", value: false, content:'Disallow unqualified attribute selectors'},
      { key: "zero-units", value: true, content:'Disallow units for zero values'}
    ];
  }

  getDefaultJsHint(){
    return [
        {key:"maxerr",        value: 50, type: 'number', content: '{int} Maximum error before stopping'},
        {key:"bitwise",       value: true, type: 'boolean', content: 'true: Prohibit bitwise operators (&, |, ^, etc.)'},
        {key:"camelcase",     value: false, type: 'boolean', content: 'true: Identifiers must be in camelCase'},
        {key:"curly",         value: true, type: 'boolean', content: 'true: Require {} for every new block or scope'},
        {key:"eqeqeq",        value: true, type: 'boolean', content: 'true: Require triple equals (===) for comparison'},
        {key:"forin",         value: true, type: 'boolean', content: 'true: Require filtering for..in loops with obj.hasOwnProperty()'},
        {key:"freeze",        value: true, type: 'boolean', content: 'true: prohibits overwriting prototypes of native objects such as Array, Date etc.'},
        {key:"immed",         value: false, type: 'boolean', content: 'true: Require immediate invocations to be wrapped in parens e.g. `(function () { } ());`'},
        {key:"latedef",       value: false, type: 'boolean', content: 'true: Require variables/functions to be defined before being used'},
        {key:"newcap",        value: false, type: 'boolean', content: 'true: Require capitalization of all constructor functions e.g. `new F()`'},
        {key:"noarg",         value: true, type: 'boolean', content: 'true: Prohibit use of `arguments.caller` and `arguments.callee`'},
        {key:"noempty",       value: true, type: 'boolean', content: 'true: Prohibit use of empty blocks'},
        {key:"nonbsp",        value: true, type: 'boolean', content: 'true: Prohibit "non-breaking whitespace" characters.'},
        {key:"nonew",         value: false, type: 'boolean', content: 'true: Prohibit use of constructors for side-effects (without assignment)'},
        {key:"plusplus",      value: false, type: 'boolean', content: 'true: Prohibit use of `++` and `--`'},
        {key:"quotmark",      value: false, type: 'boolean', content: 'Quotation mark consistency: -false    : do nothing (default) -true     : ensure whatever is used is consistent -"single" : require single quotes -"double" : require double quotes'},
        {key:"undef",         value: true, type: 'boolean', content: 'true: Require all non-global variables to be declared (prevents global leaks)'},
        {key:"unused",        value: true, type: 'boolean', content: 'Unused variables: - true     : all variables, last function parameter - "vars"   : all variables only - "strict" : all variables, all function parameters'},
        {key:"strict",        value: true, type: 'boolean', content: 'true: Requires all functions run in ES5 Strict Mode'},
        {key:"maxparams",     value: false, type: 'boolean', content: '{int} Max number of formal params allowed per function'},
        {key:"maxdepth",      value: false, type: 'boolean', content: '{int} Max depth of nested blocks (within functions)'},
        {key:"maxstatements", value: false, type: 'boolean', content: '{int} Max number statements per function'},
        {key:"maxcomplexity", value: false, type: 'boolean', content: '{int} Max cyclomatic complexity per function'},
        {key:"maxlen",        value: false, type: 'boolean', content: '{int} Max number of characters per line'},
        {key:"varstmt",       value: false, type: 'boolean', content: 'true: Disallow any var statements. Only `let` and `const` are allowed.'},
        {key:"asi",           value: false, type: 'boolean', content: 'true: Tolerate Automatic Semicolon Insertion (no semicolons)'},
        {key:"boss",          value: false, type: 'boolean', content: 'true: Tolerate assignments where comparisons would be expected'},
        {key:"debug",         value: false, type: 'boolean', content: 'true: Allow debugger statements e.g. browser breakpoints.'},
        {key:"eqnull",        value: false, type: 'boolean', content: 'true: Tolerate use of `== null`'},
        {key:"esversion",     value: 5, type: 'number', content: '{int} Specify the ECMAScript version to which the code must adhere.'},
        {key:"moz",           value: false, type: 'boolean', content: 'true: Allow Mozilla specific syntax (extends and overrides esnext features) (ex: `for each`, multiple try/catch, function expression…)'},
        {key:"evil",          value: false, type: 'boolean', content: 'true: Tolerate use of `eval` and `new Function()`'},
        {key:"expr",          value: false, type: 'boolean', content: 'true: Tolerate `ExpressionStatement` as Programs'},
        {key:"funcscope",     value: false, type: 'boolean', content: 'true: Tolerate defining variables inside control statements'},
        {key:"globalstrict",  value: false, type: 'boolean', content: 'true: Allow global "use strict" (also enables `strict`)'},
        {key:"iterator",      value: false, type: 'boolean', content: 'true: Tolerate using the `__iterator__` property'},
        {key:"lastsemic",     value: false, type: 'boolean', content: 'true: Tolerate omitting a semicolon for the last statement of a 1-line block'},
        {key:"laxbreak",      value: false, type: 'boolean', content: 'true: Tolerate possibly unsafe line breakings'},
        {key:"laxcomma",      value: false, type: 'boolean', content: 'true: Tolerate comma-first style coding'},
        {key:"loopfunc",      value: false, type: 'boolean', content: 'true: Tolerate functions being defined in loops'},
        {key:"multistr",      value: false, type: 'boolean', content: 'true: Tolerate multi-line strings'},
        {key:"noyield",       value: false, type: 'boolean', content: 'true: Tolerate generator functions with no yield statement in them.'},
        {key:"notypeof",      value: false, type: 'boolean', content: 'true: Tolerate invalid typeof operator values'},
        {key:"proto",         value: false, type: 'boolean', content: 'true: Tolerate using the `__proto__` property'},
        {key:"scripturl",     value: false, type: 'boolean', content: 'true: Tolerate script-targeted URLs'},
        {key:"shadow",        value: false, type: 'boolean', content: 'true: Allows re-define variables later in code e.g. `var x=1; x=2;`'},
        {key:"sub",           value: false, type: 'boolean', content: 'true: Tolerate using `[]` notation when it can still be expressed in dot notation'},
        {key:"supernew",      value: false, type: 'boolean', content: 'true: Tolerate `new function () { ... };` and `new Object;`'},
        {key:"validthis",     value: false, type: 'boolean', content: 'true: Tolerate using this in a non-constructor function'},
        {key:"browser",       value: true, type: 'boolean', content: 'Web Browser (window, document, etc)'},
        {key:"browserify",    value: false, type: 'boolean', content: 'Browserify (node.js code in the browser)'},
        {key:"couch",         value: false, type: 'boolean', content: 'CouchDB'},
        {key:"devel",         value: true, type: 'boolean', content: 'Development/debugging (alert, confirm, etc)'},
        {key:"dojo",          value: false, type: 'boolean', content: 'Dojo Toolkit'},
        {key:"jasmine",       value: false, type: 'boolean', content: 'Jasmine'},
        {key:"jquery",        value: false, type: 'boolean', content: 'jQuery'},
        {key:"mocha",         value: true, type: 'boolean', content: 'Mocha'},
        {key:"mootools",      value: false, type: 'boolean', content: 'MooTools'},
        {key:"node",          value: false, type: 'boolean', content: 'Node.js'},
        {key:"nonstandard",   value: false, type: 'boolean', content: 'Widely adopted globals (escape, unescape, etc)'},
        {key:"phantom",       value: false, type: 'boolean', content: 'PhantomJS'},
        {key:"prototypejs",   value: false, type: 'boolean', content: 'Prototype and Scriptaculous'},
        {key:"qunit",         value: false, type: 'boolean', content: 'QUnit'},
        {key:"rhino",         value: false, type: 'boolean', content: 'Rhino'},
        {key:"shelljs",       value: false, type: 'boolean', content: 'ShellJS'},
        {key:"typed",         value: false, type: 'boolean', content: 'Globals for typed array constructions'},
        {key:"worker",        value: false, type: 'boolean', content: 'Web Workers'},
        {key:"wsh",           value: false, type: 'boolean', content: 'Windows Scripting Host'},
        {key:"yui",           value: false, type: 'boolean', content: 'Yahoo User Interface'}
    ]
  }

}
