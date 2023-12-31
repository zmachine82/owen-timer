import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { LogComponent } from './log/log.component';

const routes: Routes = [
  {path: 'timer', component: TimerComponent},
  {path: 'config', component: ConfigurationComponent},
  {path: 'log', component: LogComponent},
  {path: '', redirectTo: 'timer', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
