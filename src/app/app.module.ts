import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';  
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms'  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http'
import { DataTablesModule } from 'angular-datatables';
import {  TitleCasePipe  } from './titlecasepipe';

import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './my-http-interceptor'

import { AppComponent } from './app.component';
import {CommonService} from './common.service';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ValidationTestComponent } from './validation-test/validation-test.component';
import { AppTestComponent } from './app-test/app-test.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AddListComponent } from './add-list/add-list.component';  



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TitleCasePipe,
    ValidationTestComponent,
    AppTestComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AddListComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    DataTablesModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [CommonService,
{ 
    provide: HTTP_INTERCEPTORS, 
    useClass: MyHttpInterceptor, 
    multi: true 
} 
  ],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
