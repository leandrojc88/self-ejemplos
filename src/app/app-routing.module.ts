import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharizardComponent } from './basic/charizard/charizard.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'charizard', component: CharizardComponent },
  { path: '**', redirectTo: 'counter' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
