import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class SpotifyService {
  private BASE_API = `https://api.spotify.com/v1/search?query=`;
  private artistas: any [];
  private artistaInfo: any[];

  constructor(private _http: Http) { }

  searchArtista(terminoBusqueda: string, type = 'artist') {
      // Creacion de las cabeceras para autenticacion en API spotify
      // tslint:disable-next-line:max-line-length
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer BQA2JuEdfT_4yAoIuEtQb-fVYd_Bso0MpTeYC3Dri9b8Q2Qxp8EIFTyygVhyoF78bbErV6J62CcxdziMC2_-dzbG-S74EMb3Cjm7nM4KR8Yh353lwegOk1ebEfodXcZuu0ex2eLRSJsQryD5moGJM6_v_-VLXTS02aZsti8Di44t6eV4DEXyNHcxKhjzNB0Q7lMvmJUPMHmWuug4IgVMoOl8vqLzHvaILHggG8uxT7_f9nqc2zwmtaSMojpBXSdfeAx22mDr'});
      const options = new RequestOptions({ headers: headers }); // Create a request option

      const searchUrl = this.BASE_API + terminoBusqueda + '&offset=0&limit=10&type=' + type;
      return this._http.get(searchUrl, options).map(response => {
        this.artistas = response.json().artists.items; // Asignacion a la propiedad artiras el resultado del API
        console.log(this.artistas);
        return this.artistas;
      });
    }

    getInfoArtista(codSpotifyArtista: string) {
      // tslint:disable-next-line:max-line-length
      const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer BQA2JuEdfT_4yAoIuEtQb-fVYd_Bso0MpTeYC3Dri9b8Q2Qxp8EIFTyygVhyoF78bbErV6J62CcxdziMC2_-dzbG-S74EMb3Cjm7nM4KR8Yh353lwegOk1ebEfodXcZuu0ex2eLRSJsQryD5moGJM6_v_-VLXTS02aZsti8Di44t6eV4DEXyNHcxKhjzNB0Q7lMvmJUPMHmWuug4IgVMoOl8vqLzHvaILHggG8uxT7_f9nqc2zwmtaSMojpBXSdfeAx22mDr' });
      const options = new RequestOptions({ headers: headers }); // Create a request option

      const URL = 'https://api.spotify.com/v1/artists/';

      return this._http.get(URL + codSpotifyArtista, options).map(response => {
        this.artistaInfo = response.json(); // Asignacion a la propiedad artista el resultado del API
        // console.log(this.artistaInfo);
        return this.artistaInfo;
      });
    }
}
