import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-linked-image',
  templateUrl: './linked-image.component.html',
  styleUrls: ['./linked-image.component.scss']
})
export class LinkedImageComponent implements OnInit {
  @Input() title: string;
  @Input() Imagesrc: string;
  constructor() { }

  ngOnInit() {
  }

}
