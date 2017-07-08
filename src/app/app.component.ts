import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedLint = 'cssLint';
  csslint = [
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

  constructor(){
    this.selectedLint = 'cssLint';
  }

  changeLint(lint:string){
    console.log(lint)
    this.selectedLint = lint;
  }
}
