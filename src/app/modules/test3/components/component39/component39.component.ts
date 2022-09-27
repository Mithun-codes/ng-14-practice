import { Component, OnInit } from '@angular/core';
import {ShareService} from "../../sevices/share.service";
import {concatMap, exhaustMap, interval, mergeMap, observable, range, startWith, switchMap, take, timer} from "rxjs";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'component39',
  templateUrl: './component39.component.html',
  styleUrls: ['./component39.component.scss']
})
export class Component39Component implements OnInit {
  timeGap = 1000;
  counter: number = 0;
  numbers$ = interval(this.timeGap);
  takeFourNumbers$: any;

  constructor(private share: ShareService) { }

  ngOnInit(): void {

    this.share.getCounterObs().subscribe(val => {
      this.numbers$ = this.numbers$.pipe(map(i => {
        return Number(val) + Number(i)
      }));
    });

    this.takeFourNumbers$ = this.share.getCounterObs().pipe(switchMap(val1 => {
      return this.numbers$.pipe(
        startWith(0),
        map(val2 => {
          return Number(val2) + Number(val1);
        })
      )
    }));

    setInterval(() => this.counter++ , this.timeGap);
    this.share.getCounterObs().subscribe(item => {this.counter = item;});
  }

}
