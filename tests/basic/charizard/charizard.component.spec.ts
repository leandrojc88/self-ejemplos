import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CharizardComponent } from '../../../src/app/basic/charizard/charizard.component';
import { PokemonServiceService } from '../../../src/app/basic/service/pokemon-service.service';

describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;
  let compiled: HTMLElement;
  let service: PokemonServiceService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharizardComponent],
      imports: [HttpClientTestingModule],
      providers: [PokemonServiceService],
    }).compileComponents();

    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonServiceService);
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should matching with snapshot ', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  });

  it('should show a loading in the starting', () => {
    const h2 = compiled.querySelector('h2');
    expect(h2?.textContent).toContain('Loading...');
  });

  it('should by loading charizard inmediatrly', () => {
    const dummyPokemon = {
      name: 'charizardo!',
      sprites: {
        front_default: 'https://charizard.com/sprite.png',
      },
    };

    // comprobar que la peticion coincide con la de el componente https://pokeapi.co/api/v2/pokemon/6
    // si la cambia da error, esto es como para cuando se conoce la peticion excacta o alguna var
    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6');

    // comprobar el metodo
    expect(request.request.method).toBe('GET');

    //comprobar que la respuesta es `dummyPokemon`
    request.flush(dummyPokemon); // para ponerle dummyPokemon a la request
    fixture.detectChanges(); // actualiza los cambios en la vista

    const h3 = compiled.querySelector('h3');
    const img = compiled.querySelector('img');

    expect(h3?.textContent?.toLocaleLowerCase()).toContain(
      dummyPokemon.name.toLocaleLowerCase()
    );

    expect(img?.src).toBe(dummyPokemon.sprites.front_default);
    expect(img?.alt).toBe(dummyPokemon.name);
  });
});
