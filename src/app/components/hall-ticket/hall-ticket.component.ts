import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import jsPDF from 'jspdf';
import { InfoServiceService } from '../info-service.service';
@Component({
  selector: 'app-hall-ticket',
  templateUrl: './hall-ticket.component.html',
  styleUrls: ['./hall-ticket.component.css']
})
export class HallTicketComponent implements OnInit {
  @ViewChild('content',{static:false}) el!:ElementRef
  content!: ElementRef;
  stdData: any;
  name:any;
  number: any;
  stdEmail:any;
  gender:any;
  dob:any;
  age:any;
  class:any;
  InsName: any;
  branch: any;
  rno: any;
  division:any;
  statement:string | undefined;
  check=false
  check1=false
  fcheck=true
  constructor(private regserivce:InfoServiceService) {
   
   }

  ngOnInit(){
  this.regserivce.share.subscribe(obj=>{
      this.stdData=obj
      this.name=this.stdData.userName
      this.number=this.stdData.userNumber
      this.stdEmail=this.stdData.userEmail
      this.division=this.stdData.Division
      this.branch=this.stdData.Branch
      this.rno=this.stdData.RollNo
      this.InsName-obj.userInstitute
      this.class=obj.Class
      this.age=this.stdData.Age
      this.gender=this.stdData.Gender
      this.dob=this.stdData.DOB
      this.fcheck=false
      this.check1=true
      this.statement="Preview"
      console.log(this.stdData)
    })
  }
  downloadPdf(){
    this.statement="Download"
    let pdf =new jsPDF('p','pt','a4');
    this.check=true
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=>{
        pdf.save("HallTicket.pdf")
      }
    })
  }

}
