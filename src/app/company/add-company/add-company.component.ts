import { Component, OnInit } from '@angular/core';
import { CompanyserviceService } from '../companyservice.service';
import { Company } from '../companyservice.model';
import { ActivatedRoute, Router, Route } from '@angular/router';


@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  constructor(private CompanyService:CompanyserviceService,private route:Router) { }

  company:Company=new Company();
  companies:Company[]=[];
  flag:Boolean=false;
  ngOnInit(): void {
    this.CompanyService.GetAllCompany().subscribe((data)=>
    {
      this.companies=data;
      this.CompanyService.GetFlag().subscribe((data)=>{
      this.flag=data;
      if(this.flag==false){
        this.CompanyService.CreateCompany();
      }
    });
    });

  }
OnSubmit()
{
  this.company.TotalBranch=0;
  console.log(this.company);
  let m=0;
  this.companies.forEach(char => {
    if(char.Id > m)
    {
      m = char.Id;
    }
  });
  this.company.Id=m+1;
  this.companies.push(this.company);
  this.CompanyService.AddCompany(this.companies);
  this.route.navigate(['/ListCompany']);
}
}
