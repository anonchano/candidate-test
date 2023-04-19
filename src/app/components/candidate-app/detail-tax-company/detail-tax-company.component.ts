import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaxService } from 'app/service/tax.service';
@Component({
  selector: 'app-detail-tax-company',
  templateUrl: './detail-tax-company.component.html',
  styleUrls: ['./detail-tax-company.component.scss']
})

// export class NgbdModalContent {
// 	@Input() name;

// 	constructor(public activeModal: NgbActiveModal) {}
// }

export class DetailTaxCompanyComponent implements OnInit {

  state_default: boolean = true;
  focus: any;
  data = {
    invoiceNum: "",
    dateCreated: "",
    dueDate: "",
    goods: [{}],
    services: [{}],
  }
  inf: any;
  cilent: any;
  constructor(private taxService: TaxService, private router: Router,private modalService: NgbModal) { }

  ngOnInit() {


  }

  deleteGood(index: number){
    this.data.goods.splice(index,1);
  }

  addGood(){
    this.data.goods.push({});
  }

  deleteService(index: number){
    this.data.services.splice(index,1);
  }

  addService(){
    this.data.services.push({});
  }

  previewData(){
    
  }

  

}
