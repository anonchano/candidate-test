import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaxService } from 'app/service/tax.service';
import { jsPDF } from "jspdf";
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer'
import { Subject } from 'rxjs';
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
  inf= {firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    registrationNumber: "",
    website: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",};
  cilent= {companyName: "",
    registrationNumber: "",
    website: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    firstName: "",
    lastName: "",
    email: "",};
    tmpClient ="";
  tmpInf= "";
  doc = new jsPDF();
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  wvInstance?: WebViewerInstance;
  @ViewChild('viewer') viewer!: ElementRef;
  
  @Output() coreControlsEvent:EventEmitter<string> = new EventEmitter();

  private documentLoaded$: Subject<void>;
  constructor(private taxService: TaxService, private router: Router, private modalService: NgbModal) { this.documentLoaded$ = new Subject<void>();}

  ngOnInit() {


  }

  deleteGood(index: number) {
    this.data.goods.splice(index, 1);
  }

  addGood() {
    this.data.goods.push({});
  }

  deleteService(index: number) {
    this.data.services.splice(index, 1);
  }

  addService() {
    this.data.services.push({});
  }

  previewData() {
    // const doc = new jsPDF();

    this.doc.text("Hello world!", 10, 10);
    // this.doc.save("a4.pdf");
  }

  // ngAfterViewInit(): void {

  //   WebViewer({
  //     path: '../lib',
  //     initialDoc: '../src/assets/pdf/webviewer-demo-annotated.pdf'
  //   }, this.viewer.nativeElement).then(instance => {
  //     this.wvInstance = instance;

  //     this.coreControlsEvent.emit(instance.UI.LayoutMode.Single);

  //     const { documentViewer, Annotations, annotationManager } = instance.Core;

  //     instance.UI.openElements(['notesPanel']);

  //     documentViewer.addEventListener('annotationsLoaded', () => {
  //       console.log('annotations loaded');
  //     });

  //     documentViewer.addEventListener('documentLoaded', () => {
  //       this.documentLoaded$.next();
  //       const rectangleAnnot = new Annotations.RectangleAnnotation({
  //         PageNumber: 1,
  //         // values are in page coordinates with (0, 0) in the top left
  //         X: 100,
  //         Y: 150,
  //         Width: 200,
  //         Height: 50,
  //         Author: annotationManager.getCurrentUser()
  //       });
  //       annotationManager.addAnnotation(rectangleAnnot);
  //       annotationManager.redrawAnnotation(rectangleAnnot);
  //     });
  //   })
  // }

  saveDataClient() {
    this.tmpClient = "";
    this.tmpClient =
      this.cilent.companyName + " " +
      this.cilent.registrationNumber + " " +
      this.cilent.website + " " +
      this.cilent.address + " " +
      this.cilent.city + " " +
      this.cilent.state + " " +
      this.cilent.postalCode + " " +
      this.cilent.country + " " +
      this.cilent.firstName + " " +
      this.cilent.lastName + " " +
      this.cilent.email;
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



}
