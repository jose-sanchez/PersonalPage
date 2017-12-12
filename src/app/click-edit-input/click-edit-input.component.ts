import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-click-edit-input',
  templateUrl: './click-edit-input.component.html',
  styleUrls: ['./click-edit-input.component.scss']
})
export class ClickEditInputComponent implements OnInit {
  @Input() InputName: string;
  @Input() Value: string;
  @Input() EditMode: boolean;
  constructor() { }

  ngOnInit() {
    this.EditMode = false;
  }

}
