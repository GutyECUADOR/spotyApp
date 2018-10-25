import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';


const routes: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'buscar', component: SearchComponent },
    { path: 'artista/:id', component: ArtistaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(routes);
