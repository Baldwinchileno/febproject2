import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InventarioFormComponent } from './inventario-form.component';

describe('InventarioFormComponent', () => {
  let component: InventarioFormComponent;
  let fixture: ComponentFixture<InventarioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventarioFormComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with an empty product', () => {
    expect(component.nuevoProducto).toEqual({ id: 0, nombre: '', precio: 0, cantidad: 0 });
  });

  it('should emit a new product when agregarProducto is called', () => {
    spyOn(component.productoAgregado, 'emit');
    component.nuevoProducto = { id: 1, nombre: 'Test', precio: 100, cantidad: 5 };
    component.agregarProducto();
    expect(component.productoAgregado.emit).toHaveBeenCalledWith({
      id: 1,
      nombre: 'Test',
      precio: 100,
      cantidad: 5
    });
  });

  it('should reset form after adding a product', () => {
    component.nuevoProducto = { id: 1, nombre: 'Test', precio: 100, cantidad: 5 };
    component.agregarProducto();
    expect(component.nuevoProducto).toEqual({ id: 0, nombre: '', precio: 0, cantidad: 0 });
  });
});
