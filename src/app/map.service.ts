import { Injectable } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private siteCodeChangedSource = new Subject<string>();
  siteCodeChanged$ = this.siteCodeChangedSource.asObservable();
  siteCode: string;

  constructor() {
  }

  siteSelected(siteCode: string) {
    if (this.siteCode !== siteCode) {
      this.siteCodeChangedSource.next(siteCode);
    }
  }
}
