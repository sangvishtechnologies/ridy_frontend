import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementSettingsComponent } from './management-settings.component';
import { ManagementSettingsResolver } from './management-settings.resolver';

const routes: Routes = [
  {
    path: '',
    component: ManagementSettingsComponent,
    resolve: { data: ManagementSettingsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ManagementSettingsResolver],
})
export class ManagementSettingsRoutingModule {}
