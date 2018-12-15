import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  codArtista: any;
  artista: any;
  topTraks: any = [];

  constructor(private _activatedRoute: ActivatedRoute, private spotify: SpotifyService) {
    this._activatedRoute.params.subscribe( params => {
      this.codArtista = params['id'];
      console.log(params['id']);
    });

  }

  ngOnInit() {
    this.spotify.getInfoArtista(this.codArtista).subscribe((response: any) => {
      this.artista = response;
      console.log(response);
    });


    this.spotify.getTopTraksArtist(this.codArtista).subscribe((traks: any) => {
      this.topTraks = traks;
      console.log(traks);
    });
  }

}
