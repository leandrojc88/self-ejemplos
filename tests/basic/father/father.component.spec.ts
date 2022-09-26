import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';
import { FatherComponent } from '../../../src/app/basic/father/father.component';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatherComponent, FatherSonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should by match with snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('shold view clien in <code>', () => {
    component.onSetClient('Pedro');
    fixture.detectChanges();
    const codeTag = compiled.querySelector('.mt-20');

    expect(codeTag?.textContent).toContain('name');
    expect(codeTag?.textContent).toContain('Pedro');
  });

  it('should delete client if emir "onDeleteClient" from (son)', () => {
    component.client = { id: 1, name: 'Leandro' };
    fixture.detectChanges();

    // permite cargar la instancia del hijo desde el padre para poder interactura con el
    const sonDebugElement = fixture.debugElement.query(
      By.directive(FatherSonComponent)
    );
    const sonComponent: FatherSonComponent = sonDebugElement.componentInstance;

    sonComponent.onDeleteClient.emit();
    expect(component.client).toBe(undefined);
  });

  it('should delete client if emir "onUpdateClient" from (son)', () => {
    component.client = { id: 1, name: 'Leandro' };
    fixture.detectChanges();

    // permite cargar la instancia del hijo desde el padre para poder interactura con el
    const sonDebugElement = fixture.debugElement.query(
      By.directive(FatherSonComponent)
    );
    const sonComponent: FatherSonComponent = sonDebugElement.componentInstance;

    sonComponent.onUpdatedClient.emit({ id: 10, name: 'Pedro' });
    // (toEqual) es para evitar que mira a la posicion en memoria, revisa solo la estructura de los objetos
    expect(component.client).toEqual({ id: 10, name: 'Pedro' });
  });
});
