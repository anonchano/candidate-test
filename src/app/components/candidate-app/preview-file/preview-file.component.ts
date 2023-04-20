import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaxService } from 'app/service/tax.service';
@Component({
  selector: 'app-preview-file',
  templateUrl: './preview-file.component.html',
  styleUrls: ['./preview-file.component.scss'],
})
export class PreviewFileComponent implements OnInit {
  @Input() dataComany: any;
  @Input() dataInf: any;
  @Input() dataClient: any;
  sumTotal: 0;
  totalVat: 0
  
  simpleSlider = 40;
  doubleSlider = [20, 60];
  state_default: boolean = true;
  focus: any;
  data?: any;
  taxCompanyId: String = "0105556078229";
  actionSearch: boolean = false;
  checkboxComplete: boolean = false;
  dateCreated:any;
  dueDate:any;
  constructor(private taxService: TaxService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
  }



}
