import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BaseService {
  clickBehaviourSubject = new BehaviorSubject<any>(false);
  constructor() {}
  collapse(param) {
    this.clickBehaviourSubject.next(param);
  }
}
