import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

  import { BookStoreComponent } from './book-store/book-store.component';

const routes: Routes = [
  {
    path:"",
    component:BookStoreComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
