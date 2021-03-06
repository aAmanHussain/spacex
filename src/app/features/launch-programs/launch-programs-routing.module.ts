import { LaunchProgramsPageComponent } from './pages/launch-programs-page/launch-programs-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LaunchProgramsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchProgramsRoutingModule { }
