import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CounterRouteComponent } from '../../../src/app/basic/counter-route/counter-route.component';

describe('CounterRouteComponent', () => {
  let component: CounterRouteComponent;
  let fixture: ComponentFixture<CounterRouteComponent>;

  it('should create with value 0', async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(0);
  });

  it('should create with value url=/cunter/100', async () => {
    const mockActivateRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return param === 'initial' ? '100' : undefined;
          },
        },
      },
    };
    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivateRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(100);
  });

  it('should value 10 in route url=/cunter/100string', async () => {
    const mockActivateRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return param === 'initial' ? '100string' : undefined;
          },
        },
      },
    };
    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivateRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(10);
  });
});
