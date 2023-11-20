import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LayoutPortfolioComponent } from './layout-portfolio/layout-portfolio.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectPageComponent } from './project-page/project-page.component';



const routes: Routes = [
  {
    path: "",
    component: LayoutPortfolioComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
       data: {
          breadcrumbs: [{ label: 'Home' }]
       }
      },
      {
        path: "blog",
        component: BlogPageComponent,
        data: {
          breadcrumbs: [
            { label: 'Home', url: "/portfolio" },
            { label: "Blog"}
        ]
       }
      },
      {
        path: "blog/:id",
        component: BlogDetailComponent,
        data: {
          breadcrumbs: [
            { label: 'Home', url: "/portfolio" },
            { label: "Blog", url: "/portfolio/blog"},
            { label: "Blog Detail"}
        ]
        }
      },
      {
        path: "project",
        component: ProjectPageComponent,
         data: {
          breadcrumbs: [
            { label: 'Home', url: "/portfolio" },
            { label: "Project"}
        ]
       }
      },
      {
        path: "project/:id",
        component: ProjectDetailComponent,
         data: {
          breadcrumbs: [
            { label: 'Home', url: "/portfolio" },
            { label: "Project", url: "/portfolio/project"},
            { label: "Project Detail"}
        ]
       }
      },
      {
        path: "contact",
        component: ContactComponent,
         data: {
          breadcrumbs: [
            { label: 'Home', url: "/portfolio" },
            { label: "Contact"}
        ]
       }
      },
      {
        path: "category/:id",
        component: CategoryComponent,
        data: {
          breadcrumbs: [
            { label: 'Home', url: "/portfolio" },
            { label: "category"}
        ]
       }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
