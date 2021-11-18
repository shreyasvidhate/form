import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InfoServiceService {
  private sendData=new Subject<any>()
  public share = this.sendData.asObservable();
  constructor() { }

  conductor(pasn:any){
    this.sendData.next(pasn);
    this.sendData.asObservable()
  }
}
