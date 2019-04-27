import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';

const router : Routes = [
  {
        path : ':id/admin' , component : AdminComponent
  },
  {
        path : ':id' , component : UserComponent
  }

];

@NgModule({

  imports: [ RouterModule.forRoot(router) ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
