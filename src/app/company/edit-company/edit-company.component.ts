import { Component, OnInit } from '@angular/core';
import { Company } from '../companyservice.model';
import { CompanyserviceService } from '../companyservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  Id!:any;
  companies:Company[]=[];
  company:any;
  flag:boolean=false;

  constructor(private CompanyService:CompanyserviceService,private router:Router,private route:ActivatedRoute) { }

  RequiredValidationName= new FormControl('',[
    Validators.required
  ]);  


  ngOnInit(): void {
  this.Id=(this.route.snapshot.paramMap.get('id'));
this.CompanyService.GetAllCompany().subscribe((data)=>
{
  this.companies=data;
  this.CompanyService.GetFlag().subscribe((data)=>
  {
      this.flag=data;
      if(this.flag==false)
      {
        this.CompanyService.CreateCompany();
      }
  });
});
this.company = this.companies.find(x=>x.Id==this.Id);
console.log(this.company);
  }

  OnSubmit(){
    console.log(this.companies);

    let index=this.companies.findIndex(x=>x.Id==this.Id);
    this.companies[index].Name=this.company.Name;
    this.companies[index].Email=this.company.Email;
    this.companies[index].Address=this.company.Address;
    this.companies[index].TotalEmployee=this.company.TotalEmployee;
    this.companies[index].IsCompanyActive=this.company.IsCompanyActive;
    
    this.CompanyService.AddCompany(this.companies);
    this.router.navigate(['/ListCompany']);
  }

}
