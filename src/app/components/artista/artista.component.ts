import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista: any [];
  constructor(private _activatedRoute: ActivatedRoute, private spotify: SpotifyService) { }

  ngOnInit() {
    this._activatedRoute.params
      .map(parametros => parametros['id'])
      .subscribe(id => {

        this.spotify.getInfoArtista(id).subscribe(data => {
          this.artista = data;
          console.log(this.artista);
        });
      });

  }

}
