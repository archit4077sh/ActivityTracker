import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';

const router : Routes = [ //telling the router which view to be display when a user pastes URL into the browser address bar
  {
        path : ':id/admin' , component : AdminComponent
  },
  {
        path : ':id' , component : UserComponent
  }

];

@NgModule({

  imports: [ RouterModule.forRoot(router) ], // initializing the router and listening for browser location changes.
  exports : [RouterModule] //Exporting RouterModule makes router directives available for use in the AppModule.
})
export class AppRoutingModule { }
