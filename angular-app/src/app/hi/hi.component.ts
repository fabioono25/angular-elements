import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  //selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent implements OnInit {

  @Input() message;
  @Input() title;
  @Input() rname;
  @Input() occupation;
  @Input() location;
  @Input() first;

  @Output() display = new EventEmitter();

  constructor() { }
  ngOnInit() {
  }

  showInfo() {
    this.display.emit(`Name: ${this.rname}
                       Ocupation: ${this.occupation}
                       Based In: ${this.location}
                       First Appearance: ${this.first}`);
  }
}
