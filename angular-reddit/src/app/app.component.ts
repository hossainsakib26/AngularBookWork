import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';

  addArtical(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log('Adding artical Title:' + title.value+'  and Link: ' + link.value);
    return false;
  }

}
