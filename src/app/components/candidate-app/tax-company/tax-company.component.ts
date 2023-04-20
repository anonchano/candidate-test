import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaxService } from 'app/service/tax.service';
@Component({
  selector: 'app-tax-company',
  templateUrl: './tax-company.component.html',
  styleUrls: ['./tax-company.component.scss'],
})
export class TaxCompanyComponent implements OnInit {
  simpleSlider = 40;
  doubleSlider = [20, 60];
  state_default: boolean = true;
  focus: any;
  data?: any;
  taxCompanyId: String = "0105556078229";
  actionSearch: boolean = false;
  checkboxComplete: boolean = false;
  constructor(private taxService: TaxService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {


  }

  async searchTaxCompany() {
    if (this.taxCompanyId) {
     await this.taxService.getTaxCompany(this.taxCompanyId).subscribe(arg => {
        this.data = arg[0]
        this.actionSearch = true;
      });
    
    }
  }

  nextStep() {
    this.router.navigate(['detail'], { relativeTo: this.activatedRoute });
  }

  keyEnter(event){
    if (event.keyCode == 13){
      this.searchTaxCompany();
    }
  }

}
