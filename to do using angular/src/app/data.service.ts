import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public newtodo = new Subject<any>();
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://api.myjson.com/bins/hmuvw')
  }

  addtodo(data){
    this.newtodo.next(data);
  }
}

