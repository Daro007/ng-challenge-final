import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Pages
import { HomeComponent } from './Pages/home/home.component';
import { OwnersComponent } from './Pages/owners/owners.component';
import { SearchComponent } from './Pages/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'owners', component: OwnersComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
