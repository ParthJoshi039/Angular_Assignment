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
  
  ngOnInit(): void {
    this.CompanyService.GetAllCompany().subscribe((data)=>{
      this.Companies=data;
      console.log("--",this.Companies);
      
    });
  }

}
