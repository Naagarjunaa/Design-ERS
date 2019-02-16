import { NgModule } from '@angular/core';
import { SearchEmployeeComponent, ListSessionsComponent, SessionDetailsComponent,AdmindashboardComponent} from './components/index';
import { AdminRoutingModule } from './admin-routing.module';




@NgModule({
  declarations: [ 
    SearchEmployeeComponent,
    ListSessionsComponent,
    SessionDetailsComponent,
    AdmindashboardComponent
  ],
  imports: [
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AdminModule { }
