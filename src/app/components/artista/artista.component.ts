import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  public artista: any;
  constructor(private _activatedRoute: ActivatedRoute, private spotify: SpotifyService) {}

  ngOnInit() {
    this.spotify.getInfoArtista('5ZNxiPcbKgaNcBrERMpqeu').subscribe( (response: any) => {
      this.artista = response;
      console.log(response);
    });
  }

}
