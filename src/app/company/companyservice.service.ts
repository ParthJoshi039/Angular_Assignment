import { Company } from './companyservice.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {
  private CompanyData = new BehaviorSubject<Company[]>([]);
  Companies = this.CompanyData.asObservable();
  private f=new BehaviorSubject<boolean>(false);
  flag=this.f.asObservable();

  constructor(private http:HttpClient) { }

  GetAllCompanies():Observable<Company[]>
  {
    return this.http.get<Company[]>('assets/CompanyData/Company.json').pipe(catchError(this.errorHandler));
  }
  CreateCompany(){
    this.GetAllCompanies().subscribe((data)=>{
      this.f.next(true);
      this.CompanyData.next(data);
    });
  }
  AddCompany(comp:Company[]){
    console.log("broadcast");
    this.f.next(true);
    this.CompanyData.next(comp);
  }
  GetAllCompany():Observable<Company[]>{
    this.Companies=this.GetAllCompanies();
    return this.Companies;
  }
  GetFlag():Observable<boolean>{
    return this.flag;
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message||"Server Error");
}
}
