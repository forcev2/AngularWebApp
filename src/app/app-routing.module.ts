import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AccountComponent } from './account/account.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'account/:id', component: AccountComponent},
  {path: 'posts', component: UserPostsComponent},
  {path: '', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
