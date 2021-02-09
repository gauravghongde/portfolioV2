import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavComponent } from './nav/nav.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CursorComponent } from './cursor/cursor.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { WheelDirective } from './utilities/wheel.directive';


@NgModule({
  declarations: [
    AppComponent,
    WheelDirective,
    HomepageComponent,
    NavComponent,
    LandingPageComponent,
    CursorComponent,
    ContactComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
