import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DockModule } from 'primeng/dock';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MegamenuComponent } from './megamenu/megamenu.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { SpeedDialModule } from 'primeng/speeddial';
import { SpeeddialComponent } from './speeddial/speeddial.component';
import { MessagesModule } from 'primeng/messages';
import { HomeComponent } from './home/home.component';
import { TopbuttonComponent } from './home/topbutton/topbutton.component';
import { BottombannerComponent } from './home/bottombanner/bottombanner.component';
import { AboutComponent } from './about/about.component';
import { MidbuttonComponent } from './home/midbutton/midbutton.component';
import { SocialsComponent } from './footer/socials/socials.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MegamenuComponent,
    SpeeddialComponent,
    HomeComponent,
    TopbuttonComponent,
    BottombannerComponent,
    AboutComponent,
    MidbuttonComponent,
    SocialsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DockModule,
    MegaMenuModule,
    SpeedDialModule,
    MessagesModule,
    MenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
