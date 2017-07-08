import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedLint = 'cssLint';

  constructor(){
    this.selectedLint = 'cssLint';
  }

  changeLint(lint:string){
    console.log(lint)
    this.selectedLint = lint;
  }
}
