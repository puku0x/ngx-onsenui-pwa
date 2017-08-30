import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class AppService {

  subject = new BehaviorSubject<boolean>(false);

  constructor() { }

  get menu$(): Observable<boolean> {
    return this.subject.asObservable();
  }

  openMenu() {
    this.subject.next(true);
  }

}
