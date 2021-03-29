import { CompanyserviceService } from './../companyservice.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../companyservice.model';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {

  constructor(private CompanyService:CompanyserviceService) { }
  Companies:Company[]=[];
  flag:boolean=false;
  ngOnInit(): void {
    this.CompanyService.ReceiveCompany().subscribe((data)=>{
      this.Companies=data;
      this.CompanyService.ReceiveFlag().subscribe((data)=>{
        this.flag=data;
        if(this.flag==false){
          this.CompanyService.InitializeCompany();
        }
      });
    });
  }

}
