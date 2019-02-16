
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchEmployeeComponent, ListSessionsComponent, SessionDetailsComponent} from './components/index';

const routes: Routes = [
    {path:'',component:SearchEmployeeComponent},
    {path:'search-employee' ,component:SearchEmployeeComponent },
    {path:'list-sessions' ,component:ListSessionsComponent },
    {path:'session-details' ,component:SessionDetailsComponent }  

];

//taken from angular.io
//Only call RouterModule.forRoot in the root AppRoutingModule (or the AppModule if 
//that's where you register top level application routes). In any other module, you 
//must call the RouterModule.forChild method to register additional routes.

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }