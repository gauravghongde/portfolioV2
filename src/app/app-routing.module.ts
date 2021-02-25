import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectViewComponent } from './projects/project-view/project-view.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'projects',

    children: [
      {
        path: '',
        component: ProjectsComponent,
      },
      {
        path: ':pId',
        component: ProjectViewComponent,
        // data: { editorMode: EditorMode.ADD }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
