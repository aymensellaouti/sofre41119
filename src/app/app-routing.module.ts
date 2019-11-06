import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {ColorComponent} from './color/color.component';
import {FirstComponent} from './first/first.component';
import {DetailCvComponent} from './cv/detail-cv/detail-cv.component';
import {FrontComponent} from './front/front.component';
import {AdminComponent} from './admin/admin.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '',
    component: FrontComponent,
    children: [
      {path: 'cv/:id', component: DetailCvComponent},
      {path: 'cv', component: CvComponent},
      {path: 'login', component: LoginComponent}
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'todo', component: TodoComponent},
      {path: 'color', component: ColorComponent},
      {path: 'first/:color', component: FirstComponent},
    ]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
