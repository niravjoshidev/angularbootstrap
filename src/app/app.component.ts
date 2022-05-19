import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularbootstrap';
  content:string="";
  closeResult: string = '';
  model:any;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
   
    slides = [
      {id: 1, img: "https://dummyimage.com/350x150/423b42/fff"},
      {id: 2, img: "https://dummyimage.com/350x150/2a2b7a/fff"},
      {id: 3, img: "https://dummyimage.com/350x150/1a2b7a/fff"},
      {id: 4, img: "https://dummyimage.com/350x150/7a2b7a/fff"},
      {id: 5, img: "https://dummyimage.com/350x150/9a2b7a/fff"},
      {id: 6, img: "https://dummyimage.com/350x150/5a2b7a/fff"},
      {id: 6, img: "https://dummyimage.com/350x150/4a2b7a/fff"}
    ];

  constructor(private _model:NgbModal,private notifyService:NotificationService) {

  }

  form=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    body:new FormControl('',[Validators.required])
  })

 get F(){
    return this.form.controls;
  }
  Submit(){
    console.log(this.form.value);
    
  }

  ShowContent(result:string){
    
    
    this.content =result;
    console.log(this.content);
  }

  open(content: any) {
    this._model.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      alert(this.closeResult)
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      alert(this.closeResult)
    })
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  showToasterSuccess() {
    this.notifyService.success("Data shown successfully !!", "tutsmake.com")
  }

  showToasterError() {
    this.notifyService.error("Something is wrong", "tutsmake.com")
  }

  showToasterInfo() {
    this.notifyService.info("This is info", "tutsmake.com")
  }

  showToasterWarning() {
    this.notifyService.warning("This is warning", "tutsmake.com")
  }
}
