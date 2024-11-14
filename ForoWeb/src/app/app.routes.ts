import { Routes } from '@angular/router';
import { LoginComponent } from './pages/users/login/login.component';
import { RegisterComponent } from './pages/users/register/register.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { UserConfigurationComponent } from './pages/users/configuration/user-configuration/user-configuration.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 
  
 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'layout', 
    component: LayoutComponent, 
    children: [
      {
        path:'profile',
        component: UserConfigurationComponent
      }
     
    ]
  },
  
  
  
  // Otras rutas
];
