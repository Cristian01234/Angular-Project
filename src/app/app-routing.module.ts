import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [


  { 

    path:"home",
    component:AppComponent

  },

{
  path:"demo",
  component:DemoComponent
},

{
  path:"test",
   component:TestComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
