import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{
  MatDialogModule, MatTableModule, MatPaginatorModule,
  MatIconModule, MatFormFieldModule, MatInputModule,
  MatCardModule, MatOptionModule, MatSelectModule, MatDividerModule,
  MatExpansionModule,
} from '@angular/material';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import {MatButtonModule} from '@angular/material/button';
import { DialogDelComponent } from './dialog-del/dialog-del.component';
import { AccountComponent } from './account/account.component';
import { RouterModule } from '@angular/router';
import { UserPostsComponent } from './user-posts/user-posts.component';


const material = [
  MatDialogModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    DialogExampleComponent,
    DialogDelComponent,
    AccountComponent,
    UserPostsComponent
  ],
  entryComponents: [DialogExampleComponent, DialogDelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatOptionModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    DialogExampleComponent,
    DialogDelComponent,
    AppRoutingModule,
  ]
})
export class AppModule { }
