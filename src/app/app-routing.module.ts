import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlacementsComponent } from './placements/placements.component';
import { RegisterComponent } from './register/register.component';
import { StaffListComponent } from './staff-list/staff-list.component';

const routes: Routes = [
  {path:'',
  component: HomeComponent
},
  {path:'About', 
  component: AboutComponent
},
  {path:'Courses',
  component: CoursesComponent
},
  {path:'Placements', 
  component: PlacementsComponent
},
  {path:'Contact-Us', 
  component: ContactUsComponent
},
  {path:'Login', component: LoginComponent},
  {path: 'Register', component: RegisterComponent},
  
  {path: 'Staff-List', 
  component: StaffListComponent,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
