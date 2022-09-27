import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable()
export class ShareService {

  private counterShare = new BehaviorSubject<number>(0);
  private _counterObs$: Observable<number> = this.counterShare.asObservable();

  constructor() { }

  getCounterObs() {
    return this._counterObs$;
  }

  setCounterObs(value: number) {
    this.counterShare.next(value);
  }

}
