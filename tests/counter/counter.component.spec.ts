import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from '../../src/app/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoild be equal to snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('should by setCounter(5) to 5', () => {
    component.setCounter(5);
    expect(component.counter).toBe(5);
  });

  it('should by on click to button +1 and button -1', () => {
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();
    buttons[0].click();
    buttons[0].click();
    expect(component.counter).toBe(3);
    buttons[1].click();
    expect(component.counter).toBe(2);
  });

  it('should incresad counter and view in html', () => {
    component.setCounter(5);
    fixture.detectChanges();

    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('5');
  });
});
