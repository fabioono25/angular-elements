import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  //selector: 'app-hi-form',
  templateUrl: './hi-form.component.html',
  styleUrls: ['./hi-form.component.css']
})
export class HiFormComponent implements OnInit {

  hiForm: FormGroup;

  @Input()
  message;
  @Input()
  realname;
  @Input()
  occupation;
  @Input()
  location;
  @Input()
  firstname;
  @Output()
  heroSubmit = new EventEmitter();

  constructor() { }

  ngOnInit() {

    this.hiForm = new FormGroup({
      message: new FormControl(this.message),
      realname: new FormControl(this.realname),
      occupation: new FormControl(this.occupation),
      location: new FormControl(this.location),
      firstname: new FormControl(this.firstname)
    });
  }

  onSubmit({ value, valid }) {
    if (valid) {
      this.heroSubmit.next(value);
    }
  }

}
