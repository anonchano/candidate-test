import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { HttpClientModule } from '@angular/common/http';
import { TaxService } from './service/tax.service';
import { DetailTaxCompanyComponent } from './components/candidate-app/detail-tax-company/detail-tax-company.component';
import { TaxCompanyComponent } from './components/candidate-app/tax-company/tax-company.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {NgxPrintModule} from 'ngx-print';
import { PreviewFileComponent } from './components/candidate-app/preview-file/preview-file.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TaxCompanyComponent,
    DetailTaxCompanyComponent,
    PreviewFileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    HttpClientModule,
    PdfViewerModule,
    NgxPrintModule,
  ],
  exports: [],
  providers: [TaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
