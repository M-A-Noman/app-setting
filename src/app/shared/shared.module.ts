import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ContainerComponent } from './components/container/container.component';
import { SettingOptionComponent } from './components/setting-option/setting-option.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomChipsComponent } from './components/custom-chips/custom-chips.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ButtonComponent,
    ContainerComponent,
    SettingOptionComponent,
    HeaderComponent,
    CustomChipsComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports:[
    ButtonComponent,
    ContainerComponent,
    SettingOptionComponent,
    HeaderComponent,
    CustomChipsComponent,
    FontAwesomeModule
  ],
})
export class SharedModule { }
