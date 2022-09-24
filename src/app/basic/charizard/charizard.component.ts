import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../model';
import { PokemonServiceService } from '../service/pokemon-service.service';

@Component({
  selector: 'app-charizard',
  templateUrl: './charizard.component.html',
  styleUrls: ['./charizard.component.scss'],
})
export class CharizardComponent implements OnInit {

  public charizard?: Pokemon;

  constructor(private pokemonService: PokemonServiceService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon(6).subscribe((pokemon: Pokemon) => {
      this.charizard = pokemon;
    });
  }
}
