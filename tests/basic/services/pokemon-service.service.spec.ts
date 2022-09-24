import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PokemonServiceService } from '../../../src/app/basic/service/pokemon-service.service';

describe('PokemonServiceService', () => {
  let service: PokemonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PokemonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the data from API', (done) => {
    service.getPokemon(1).subscribe((pokemon) => {
      expect(pokemon.name).toBe('bulbasaur');
      // permite hacer q la prueba espere por la respuesta como una promesa
      done();
    });
  });
});
