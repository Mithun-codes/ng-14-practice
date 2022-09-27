import { Component, OnInit } from '@angular/core';
import {ShareService} from "../../sevices/share.service";

@Component({
  selector: 'component38',
  templateUrl: './component38.component.html',
  styleUrls: ['./component38.component.scss']
})
export class Component38Component implements OnInit {
  newCounter: number | undefined;

  constructor(private share: ShareService) { }

  ngOnInit(): void {
  }

  setCounter(counter: any) {
    this.share.setCounterObs(counter);
  }
}
