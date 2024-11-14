import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importar los módulos de Angular Material que deseas utilizar
import { MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {matExpansionAnimations, MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { matTabsAnimations, MatTabsModule } from '@angular/material/tabs'; // Importar MatTabsModule
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonToggleGroup, MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule, 
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatButtonToggleGroup

    
  ],
  exports: [
    // Exportar los módulos que quieres usar en otros módulos
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatButtonToggleGroup
  ]
})
export class MaterialComponentModule { }
