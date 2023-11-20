import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListAuthComponent } from './components/list-auth/list-auth.component';
import { UserComponent } from './components/auth/user/user.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/custom/header/header.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BannerComponent } from './components/custom/banner/banner.component';
import { AdminlayoutComponent } from './pages/adminlayout/adminlayout.component';
import { CategoryComponent } from './components/custom/category/category.component';
import { UpdateAuthComponent } from './components/update-auth/update-auth.component';
import { CardComponent } from './components/Cart/card/card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzResultModule } from 'ng-zorro-antd/result';
import { PostComponent } from './components/post/post.component';
import { PostAddUpdateComponent } from './components/post-add-update/post-add-update.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { FooterComponent } from './components/custom/footer/footer.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ProjectModule } from './components/project/project.module';
import { CategoryModule } from './components/category/category.module';
import { ProductListComponent } from './customer/product-list/product-list.component';
import { CartListComponent } from './components/Cart/cart-list/cart-list.component';
import { UpdateUserComponent } from './components/auth/update-user/update-user.component';
import { PaymentComponent } from './components/Cart/payment/payment.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    ProductDetailComponent,
    AddProductComponent,
    ListAuthComponent,
    HomepageComponent,
    NotFoundComponent,
    HeaderComponent,
    UpdateUserComponent,
    UserComponent,
    PaymentComponent,
    CartListComponent,
    BannerComponent,
    UpdateAuthComponent,
    AdminlayoutComponent,
    ProductListComponent,
    ProductsComponent,
    CategoryComponent,
    CardComponent,
    PostComponent,
    PostAddUpdateComponent,
    ListPostComponent,
    FooterComponent,
    DashboardComponent,
    SigninComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzPageHeaderModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzResultModule,
    NzTableModule,
    NzFormModule,
    NzButtonModule,
    NzNotificationModule,
    ProjectModule,
    CategoryModule
    
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
