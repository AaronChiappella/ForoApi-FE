import { Component } from '@angular/core';
import { MaterialComponentModule } from '../../../../shared/material-component.module';

@Component({
  selector: 'app-user-configuration',
  standalone: true,
  imports: 
  [
    MaterialComponentModule
  ],
  templateUrl: './user-configuration.component.html',
  styleUrl: './user-configuration.component.scss'
})
export class UserConfigurationComponent {

}
