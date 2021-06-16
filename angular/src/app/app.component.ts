import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  getResponse: any;
  postResponse: any;
  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { 
  }
   
  makeGetApiCall(){
    this.http.get<any>(this.url)
    .subscribe((data) => {
      this.getResponse = data;
    }, error => console.log("error", error));
  }

  makePostApiCall(modeForm){
    let params = new HttpParams();
    params = params.append('mode', modeForm.value.mode);
    this.http.post<any>(this.url, {}, {params: params} )
    .subscribe((data) => {
      this.postResponse = data;
    }, error => console.log("error", error));
  }
}
