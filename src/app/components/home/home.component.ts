import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private arrayPaises = [];
  public arrayNewReleases: any = [];

  constructor(private http: HttpClient, private spotifyService: SpotifyService) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es') // Retorna el observable
      .subscribe( (respuesta: any) => { // respuesta, o X nombre es el nombre de la variable que tendrá la respuesta,
        this.arrayPaises = respuesta;  // se le asigna el tipo any para descartar el tipo de objeto que va a recibir
        console.log(respuesta);
      });
  }

  ngOnInit() {
    this.spotifyService.getNewReleases().subscribe( (response: any) => { // Tipo Any si no tenemos un modelo de datos que devolvera
      console.log(response);
      this.arrayNewReleases = response;
    });
  }

}
