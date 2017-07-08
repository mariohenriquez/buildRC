import { Component } from '@angular/core';
// import * as data from 'jshint.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedLint: string;
  csslint: any;
  jslint: any;

  constructor() {
    this.selectedLint = 'cssLint';
    this.csslint = [
      { key: "adjoining-classes", value: false},
      { key: "box-model", value: false},
      { key: "box-sizing", value: false},
      { key: "bulletproof-font-face", value: false},
      { key: "compatible-vendor-prefixes", value: false},
      { key: "display-property-grouping", value: false},
      { key: "duplicate-background-images", value: false},
      { key: "duplicate-properties", value: false},
      { key: "empty-rules", value: false},
      { key: "fallback-colors", value: false},
      { key: "floats", value: false},
      { key: "font-faces", value: false},
      { key: "font-sizes", value: false},
      { key: "gradients", value: false},
      { key: "ids", value: false},
      { key: "import", value: false},
      { key: "important", value: false},
      { key: "known-properties", value: false},
      { key: "non-link-hover", value: false},
      { key: "outline-none", value: false},
      { key: "overqualified-elements", value: false},
      { key: "qualified-headings", value: false},
      { key: "regex-selectors", value: false},
      { key: "shorthand", value: false},
      { key: "star-property-hack", value: false},
      { key: "text-indent", value: false},
      { key: "underscore-property-hack", value: false},
      { key: "vendor-prefix", value: false},
      { key: "unique-headings", value: false},
      { key: "universal-selector", value: false},
      { key: "unqualified-attributes", value: false},
      { key: "zero-units", value: false}
    ];
    this.jslint = [
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

  changeLint(lint:string) {
    this.selectedLint = lint;
  }
}
