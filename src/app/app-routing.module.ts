import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './tests/test/test.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/home',pathMatch:'full'

  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'setting',loadChildren:()=>import('./setting/setting.module').then((m)=>m.SettingModule)
  },
  {
    path:'test',component:TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
