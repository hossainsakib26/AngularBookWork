import { Component, OnInit, HostBinding } from '@angular/core';
import { Artical } from "../modles/artical.model";

@Component({
  selector: 'app-artical',
  templateUrl: './artical.component.html',
  styleUrls: ['./artical.component.css']
})
export class ArticalComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  artical: Artical;

  constructor() {
      this.artical = new Artical(
        'Angular',
        'https://angular.io/',
        10
      )
   }

  ngOnInit(): void {

  }

  voteUp(): boolean{
    this.artical.votes += 1;
    return false;
  }

  voteDown(): boolean{
    this.artical.votes -= 1;
    return false;
  }
  
}
