import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharizardComponent } from './basic/charizard/charizard.component';
import { FatherComponent } from './basic/father/father.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'basic/charizard', component: CharizardComponent },
  { path: 'basic/father', component: FatherComponent },
  { path: '**', redirectTo: 'counter' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
