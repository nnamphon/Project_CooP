import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule} from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { ManuComponent } from './manu/manu.component';
import { ManuService} from './service/manu.service';
import { HomestaffComponent } from './homestaff/homestaff.component';
import { RegisterComponent } from './register/register.component';
import { ShowmanuComponent } from './showmanu/showmanu.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PointComponent } from './point/point.component';
import { PointViewComponent } from './point-view/point-view.component';
import { ShowComponent} from "./show/show.component";
import { FlexLayoutModule} from "@angular/flex-layout";
import { CancelMemberComponent } from './cancel-member/cancel-member.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { DragDropModule} from '@angular/cdk/drag-drop';

import {
                MatAutocompleteModule,MatBadgeModule,
                MatBottomSheetModule,MatButtonModule,
                MatButtonToggleModule,MatCardModule,
                MatCheckboxModule,MatChipsModule,
                MatDatepickerModule, MatDialogModule,
                MatDividerModule,MatExpansionModule,
                MatGridListModule, MatIconModule,
                MatInputModule,MatListModule,
                MatMenuModule,MatNativeDateModule,
                MatPaginatorModule,MatProgressBarModule,
                MatProgressSpinnerModule,MatRadioModule,
                MatRippleModule,MatSelectModule,
                MatSidenavModule,MatSliderModule,
                MatSlideToggleModule, MatSnackBarModule,
                MatSortModule, MatStepperModule,
                MatTableModule,MatTabsModule,
                MatToolbarModule, MatTooltipModule,
                MatTreeModule,} from '@angular/material';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'homestaff', component: HomestaffComponent},
  {path: 'manu', component: ManuComponent},
  {path: 'add-mold', component: RegisterComponent},
  {path: 'showmanu', component: ShowmanuComponent},
  {path: 'contact', component: ContactComponent },
  {path: 'home', component: HomeComponent },
  {path: 'add-data',component:PointComponent},
  {path: 'history',component:PointViewComponent},
  {path: 'home-show', component: ShowComponent},
  {path: 'delete-mold',component: CancelMemberComponent } ,
];

@NgModule({
  declarations: [
    AppComponent,
    ManuComponent,
    HomestaffComponent,
    RegisterComponent,
    ShowmanuComponent,
    LoginComponent, 
    HomeComponent,
    ContactComponent,
    PointComponent,
    PointViewComponent,
    ShowComponent ,
    CancelMemberComponent,],
  imports: [
    DragDropModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,DragAndDropModule ,
    ReactiveFormsModule,
    CommonModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBS-fusP8ANNGCD1KGL7Bop1bqD1XcXTYk'}),
    FlexLayoutModule

  ],
  entryComponents: [],
  providers: [ManuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
