import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _notif:ToastrService) { }

  success(message:string,title:string){
     this._notif.success(message,title);
  }
  error(message:string,title:string){
     this._notif.error(message,title);
  }
  warning(message:string,title:string){
     this._notif.warning(message,title);
  }

  info(message:string,title:string){
     this._notif.info(message,title);
  }
}
