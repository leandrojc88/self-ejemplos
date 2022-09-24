import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../model';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  constructor(private httpClient: HttpClient) {}

  getPokemon(id: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
  }
}
