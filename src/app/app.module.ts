import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { UserComponent } from './user/user.component';
import { CardComponent } from './card/card.component';
import { BookComponent } from './book/book.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GuideComponent } from './guide/guide.component';
import { ElibraryComponent } from './elibrary/elibrary.component';
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { BorrowingComponent } from './borrowing/borrowing.component';
import { LoginComponent } from './login/login.component';
import { UpdateborrowingComponent } from './updateborrowing/updateborrowing.component';
import { UpdategalleryComponent } from './updategallery/updategallery.component';
import { UpdatenewsComponent } from './updatenews/updatenews.component';
import { ZanristComponent } from './zanrist/zanrist.component';
import { ZanrkomComponent } from './zanrkom/zanrkom.component';
import { ZanrpubComponent } from './zanrpub/zanrpub.component';
import { ZanrljubComponent } from './zanrljub/zanrljub.component';
import { ZanrkrimiComponent } from './zanrkrimi/zanrkrimi.component';
import { DialogComponent } from './dialog/dialog.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    UserComponent,
    CardComponent,
    BookComponent,
    AboutusComponent,
    GuideComponent,
    ElibraryComponent,
    NewsComponent,
    GalleryComponent,
    ContactComponent,
    BorrowingComponent,
    LoginComponent,
    UpdateborrowingComponent,
    UpdategalleryComponent,
    UpdatenewsComponent,
    ZanristComponent,
    ZanrkomComponent,
    ZanrpubComponent,
    ZanrljubComponent,
    ZanrkrimiComponent,
    DialogComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatGridListModule,
    MatIconModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
