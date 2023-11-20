import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HeaderPortfolioComponent } from './header-portfolio/header-portfolio.component';
import { FooterPortfolioComponent } from './footer-portfolio/footer-portfolio.component';
import { LayoutPortfolioComponent } from './layout-portfolio/layout-portfolio.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactComponent } from './contact/contact.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectComponent } from './project/project.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    HeaderPortfolioComponent,
    FooterPortfolioComponent,
    LayoutPortfolioComponent,
    ProjectPageComponent,
    ProjectDetailComponent,
    BlogPageComponent,
    ContactComponent,
    BreadcrumbComponent,
    HomeComponent,
    BannerComponent,
    BlogComponent,
    ProjectComponent,
    BlogDetailComponent,
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NzIconModule,
    NzFormModule,
    NzButtonModule,
  ]
})
export class CustomerModule { }
