import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatherSonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shold by match snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('shold not view buttons if not a plient', () => {
    const button = compiled.querySelectorAll('button');
    expect(button.length).toBe(0);
  });

  it('shold view buttons if plient exist', () => {
    component.client = { id: 1, name: 'LEO' };
    fixture.detectChanges();

    const button = compiled.querySelectorAll('button');
    expect(button.length).toBe(2);
  });

  it('shold by match snapshot if client exist', () => {
    component.client = { id: 1, name: 'LEO' };
    fixture.detectChanges();
    expect(compiled).toMatchSnapshot();
  });

  it('should emit onDeleteClient when delete button is clicked', () => {
    component.client = { id: 1, name: 'LEO' };
    fixture.detectChanges();

    // esto es como un mock de una funcion
    jest.spyOn(component.onDeleteClient, 'emit');
    const buttonDelete = compiled.querySelector('[data-test=btn-delete]');

    buttonDelete?.dispatchEvent(new Event('click'));
    expect(component.onDeleteClient.emit).toHaveBeenCalled();
  });

  it('should emit onUpdatedClient when "Cambiar ID" button is clicked', () => {
    component.client = { id: 1, name: 'LEO' };
    fixture.detectChanges();

    // esto es como un mock de una funcion
    jest.spyOn(component.onUpdatedClient, 'emit');
    const buttonUpdate = compiled.querySelector('[data-test=btn-update]');

    buttonUpdate?.dispatchEvent(new Event('click'));
    expect(component.onUpdatedClient.emit).toHaveBeenCalledWith({
      id: 5,
      name: 'LEO',
    });
  });

  it('should emit onUpdatedClient if "client" is exist ', () => {
    // esto es como un mock de una funcion
    jest.spyOn(component.onUpdatedClient, 'emit');
    component.onUpdate(10);
    expect(component.onUpdatedClient.emit).not.toHaveBeenCalled();

    component.client = { id: 1, name: 'LEO' };
    fixture.detectChanges();
    component.onUpdate(10);
    expect(component.onUpdatedClient.emit).toHaveBeenCalledWith({
      id: 10,
      name: 'LEO',
    });
  });
});
