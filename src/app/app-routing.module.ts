import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BorrowingComponent } from './borrowing/borrowing.component';
import { ContactComponent } from './contact/contact.component';
import { ElibraryComponent } from './elibrary/elibrary.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GuideComponent } from './guide/guide.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateborrowingComponent } from './updateborrowing/updateborrowing.component';
import { UpdategalleryComponent } from './updategallery/updategallery.component';
import { UpdatenewsComponent } from './updatenews/updatenews.component';
import { ZanristComponent } from './zanrist/zanrist.component';
import { ZanrkomComponent } from './zanrkom/zanrkom.component';
import { ZanrpubComponent } from './zanrpub/zanrpub.component';
import { ZanrljubComponent } from './zanrljub/zanrljub.component';
import { ZanrkrimiComponent } from './zanrkrimi/zanrkrimi.component';
import { AuthguardService } from './authguard.service';
import { RoleguardService } from './roleguard.service';
import { ClanguardService } from './clanguard.service';


const routes: Routes = [
  { path: 'user', component: UserComponent, canActivate: [AuthguardService, RoleguardService] },
  { path: 'book', component: BookComponent, canActivate: [AuthguardService, RoleguardService] },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'borrowing', component: BorrowingComponent, canActivate: [AuthguardService, ClanguardService] },
  { path: 'contact', component: ContactComponent },
  { path: 'elibrary', component: ElibraryComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'news', component: NewsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthguardService] },
  { path: 'updateborrowing', component: UpdateborrowingComponent, canActivate: [AuthguardService, RoleguardService] },
  { path: 'updategallery', component: UpdategalleryComponent, canActivate: [AuthguardService, RoleguardService] },
  { path: 'updatenews', component: UpdatenewsComponent, canActivate: [AuthguardService, RoleguardService]},
  { path: 'zanrist', component: ZanristComponent },
  { path: 'zanrkom', component: ZanrkomComponent },
  { path: 'zanrkrimi', component: ZanrkrimiComponent },
  { path: 'zanrljub', component: ZanrljubComponent },
  { path: 'zanrpub', component: ZanrpubComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  providers: [
    AuthguardService,
    RoleguardService,
    ClanguardService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
