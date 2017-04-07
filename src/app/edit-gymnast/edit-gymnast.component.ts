import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Gymnast } from '../gymnast.model'

@Component({
  selector: 'app-edit-gymnast',
  templateUrl: './edit-gymnast.component.html',
  styleUrls: ['./edit-gymnast.component.css']
})
export class EditGymnastComponent implements OnInit {
@Input() selectedGymnast;
@Output() editGymnastSender = new EventEmitter();

editGymnast(){
  console.log("edit-gymnast.ts" + this.selectedGymnast)
  this.editGymnastSender.emit(this.selectedGymnast);
}

  constructor() { }

  ngOnInit() {
  }

}
