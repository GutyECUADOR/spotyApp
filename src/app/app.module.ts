import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { FormsModule } from '@angular/forms';

/* SERVICIOS */
import { SpotifyService } from './services/spotify.service';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { ArtistaComponent } from './components/artista/artista.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    SearchComponent,
    HomeComponent,
    SinfotoPipe,
    DomseguroPipe,
    ArtistaComponent,
    TarjetaComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
