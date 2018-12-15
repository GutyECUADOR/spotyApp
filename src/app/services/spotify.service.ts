import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; // (map) Filtra la informacion de la respuesta del API


@Injectable()
export class SpotifyService {
  /* Definir token de validacion aqui https://accounts.spotify.com/api/token*/
  private token = 'Bearer BQDkG5ScDWWd-YhdmefY1ln0t6ad6njSSBEpwxfIUS5MelXyHdp8wtjV2VK2Pu4zJoANu9S6XqAgC3b7eMU';

  constructor(private httpCli: HttpClient) { }

  searchArtista(terminoBusqueda: string) {
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    const BASE_API = `https://api.spotify.com/v1/search?query=`;
    const searchUrl = BASE_API + terminoBusqueda + '&offset=0&limit=10&type=artist';

    return this.httpCli.get(searchUrl, { headers })
      .pipe(map(response => {
        return response['artists'].items;
      }));

    }

  getInfoArtista(codSpotifyArtista: string) {

    const headers = new HttpHeaders({
      'Authorization': this.token
    });
      const URL = 'https://api.spotify.com/v1/artists/';

    return this.httpCli.get(URL + codSpotifyArtista, { headers });
    }

  getNewReleases() {
    /*Paràmetros que se envian por GET y POST, ejem ID, authorization, etc*/
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.httpCli.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .pipe(map( response => {
        return response['albums'].items;
      }));
  }


  getTopTraksArtist(codSpotifyArtista: string) {
    /*Paràmetros que se envian por GET y POST, ejem ID, authorization, etc*/
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    const URL = `https://api.spotify.com/v1/artists/${codSpotifyArtista}/top-tracks?country=EC`;

    return this.httpCli.get(URL, { headers })
      .pipe(map(response => {
        return response['tracks'];
      }));
  }
}
