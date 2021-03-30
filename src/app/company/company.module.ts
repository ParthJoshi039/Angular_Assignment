import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompanyRoutingModule } from './company-routing.module';
import { AddCompanyComponent } from './add-company/add-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { ViewCompanyComponent } from './view-company/view-company.component';
import { ListCompanyComponent } from './list-company/list-company.component';


@NgModule({
  declarations: [ AddCompanyComponent, EditCompanyComponent,  ViewCompanyComponent, ListCompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule
  ]
})
export class CompanyModule { }
