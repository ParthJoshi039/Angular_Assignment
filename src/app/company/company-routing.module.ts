import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { ViewCompanyComponent } from './view-company/view-company.component';
import { ListCompanyComponent } from './list-company/list-company.component';

const routes: Routes = [
  {path:'addcompany', component: AddCompanyComponent},
  {path:'EditCompany', component: EditCompanyComponent},
  {path:'ViewCompany', component: ViewCompanyComponent},
  {path:'ListCompany', component: ListCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
