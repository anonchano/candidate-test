import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaxService } from 'app/service/tax.service';
@Component({
  selector: 'app-tax-company',
  templateUrl: './tax-company.component.html',
  styleUrls: ['./tax-company.component.scss']
})
export class TaxCompanyComponent implements OnInit {
  simpleSlider = 40;
  doubleSlider = [20, 60];
  state_default: boolean = true;
  focus: any;
  data?: any;
  constructor(private taxService: TaxService, private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {


  }

  searchTaxCompany() {
    this.taxService.getTaxCompany('0105556078229').subscribe(arg => { 
      this.data = arg[0] 
    });
  }

  nextStep(){
    this.router.navigate(['detail'], { relativeTo: this.activatedRoute });
  }

}
