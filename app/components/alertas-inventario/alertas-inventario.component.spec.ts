import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasInventarioComponent } from './alertas-inventario.component';

describe('AlertasInventarioComponent', () => {
  let component: AlertasInventarioComponent;
  let fixture: ComponentFixture<AlertasInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertasInventarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertasInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
