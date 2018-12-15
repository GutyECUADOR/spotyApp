import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public terminoBusqueda: string;
  public isLoading: boolean;
  public artistas: any = [];

  constructor(private spotify: SpotifyService) {
  }

  ngOnInit() {

  }

  buscarArtista() {
    console.log(this.terminoBusqueda);
    if (this.terminoBusqueda.length > 0) {
      this.isLoading = true;
      this.spotify.searchArtista(this.terminoBusqueda).subscribe((response: any) => {
        this.artistas = response;
        console.log(response);
        this.isLoading = false;
      });
    }

  }

}
