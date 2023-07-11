import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TyreService {

url= 'https://localhost:7120/api/Tyre'
constructor(private http: HttpClient) { }

users(){
return this.http.get(this.url);
}

saveUser(formData:any){
  return this.http.post(this.url,formData)
}

}
