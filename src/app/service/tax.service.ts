import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TaxService {
    // let url = 'https://eservice.rd.go.th/rd-ves-service/vesweb/search/vatRegistrantsIn/1/0105556078229/0';
    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    public getTaxCompany(TaxId: String) {
        return this.http.get('https://eservice.rd.go.th/rd-ves-service/vesweb/search/vatRegistrantsIn/1/'+TaxId+'/0', this.httpOptions);
    }
}
