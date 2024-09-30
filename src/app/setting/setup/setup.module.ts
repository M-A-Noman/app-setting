import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupRoutingModule } from './setup.routing.module';
import { SetupComponent } from './setup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SetupComponent
  ],
  imports: [
    
    SetupRoutingModule,
    SharedModule,
  ]
})
export class SetupModule { }
