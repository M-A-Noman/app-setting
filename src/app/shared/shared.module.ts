import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ContainerComponent } from './components/container/container.component';
import { SettingOptionComponent } from './components/setting-option/setting-option.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomChipsComponent } from './components/custom-chips/custom-chips.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ContainerComponent,
    SettingOptionComponent,
    HeaderComponent,
    CustomChipsComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports:[
    ButtonComponent,
    ContainerComponent,
    SettingOptionComponent,
    HeaderComponent,
    CustomChipsComponent,
    FooterComponent,

    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
})
export class SharedModule { }
