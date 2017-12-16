import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-click-edit-input',
  templateUrl: './click-edit-input.component.html',
  styleUrls: ['./click-edit-input.component.scss']
})
export class ClickEditInputComponent implements OnInit {
  @Input() InputName: string;
  @Input() TextValue: string;
  @Input() EditMode: boolean;
  @Input() Width: number;
  @Output() ValueChange: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.EditMode = false;
    //this.Value ="pedo"
  }

  changeValue() {
    this.ValueChange.emit(this.TextValue);
  }

}
