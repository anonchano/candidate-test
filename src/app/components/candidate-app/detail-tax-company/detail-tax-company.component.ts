import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaxService } from 'app/service/tax.service';
import { jsPDF } from "jspdf";
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer'
import { Subject } from 'rxjs';
import { now } from 'jquery';
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
    inf: {},
    client: {},
    sumTotal: 0,
    totalVat: 0,
  }
  inf = {
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    registrationNumber: "",
    website: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  };
  client = {
    companyName: "",
    registrationNumber: "",
    website: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  tmpClient = "";
  tmpInf = "";
  doc = new jsPDF();
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  wvInstance?: WebViewerInstance;
  @ViewChild('viewer') viewer!: ElementRef;

  @Output() coreControlsEvent: EventEmitter<string> = new EventEmitter();

  private documentLoaded$: Subject<void>;
  constructor(private taxService: TaxService, private router: Router, private modalService: NgbModal) { this.documentLoaded$ = new Subject<void>(); }

  ngOnInit() {
    this.data = {
      invoiceNum: "001",
      dateCreated: "",
      dueDate: "",
      goods: [{}],
      services: [{}],
      inf: {},
      client: {},
      sumTotal: 0,
      totalVat: 0,
    }
    this.data.inf = {
      firstName: "inf1",
      lastName: "inf2",
      email: "inf3",
      companyName: "inf4",
      registrationNumber: "inf5",
      website: "inf6",
      address: "inf7",
      city: "inf8",
      state: "inf9",
      postalCode: "inf10",
      country: "inf11",
    };
    this.data.client = {
      companyName: "cli1",
      registrationNumber: "cli2",
      website: "cli3",
      address: "cli4",
      city: "cli5",
      state: "cli6",
      postalCode: "cli7",
      country: "cli8",
      firstName: "cli9",
      lastName: "cli10",
      email: "cli11",
    };
  }

  deleteGood(index: number) {
    console.log(index)
    this.data.goods.splice(index, 1);
  }

  addGood() {
    this.data.goods.push({
      item: "",
      description: "",
      price: "",
      qty: "",
      total: "",
    });
  }

  deleteService(index: number) {
    this.data.services.splice(index, 1);
  }

  addService() {
    this.data.services.push({});
  }

  previewData() {

  }

  saveDataClient() {
    this.tmpClient = "";
    this.tmpClient =
      this.client.companyName + " " +
      this.client.registrationNumber + " " +
      this.client.website + " " +
      this.client.address + " " +
      this.client.city + " " +
      this.client.state + " " +
      this.client.postalCode + " " +
      this.client.country + " " +
      this.client.firstName + " " +
      this.client.lastName + " " +
      this.client.email;
  }

  saveDataInf() {
    this.tmpInf = "";
    this.tmpInf =
      this.inf.firstName + " " +
      this.inf.lastName + " " +
      this.inf.email + " " +
      this.inf.companyName + " " +
      this.inf.registrationNumber + " " +
      this.inf.website + " " +
      this.inf.address + " " +
      this.inf.city + " " +
      this.inf.state + " " +
      this.inf.postalCode + " " +
      this.inf.country
  }

  logs() {
    console.log(JSON.stringify(this.data.dateCreated));
  }



}
