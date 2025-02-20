import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-inventario-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inventario-form.component.html',
  styleUrls: ['./inventario-form.component.css']
})
export class InventarioFormComponent {
  @Output() productoAgregado = new EventEmitter<Producto>();
  @Input() productoEnEdicion: Producto | null = null;

  nuevoProducto: Producto = {
    id: 0,
    nombre: '',
    precio: 0,
    cantidad: 0,
    categoria: '',
    proveedor: ''
  };

  ngOnChanges() {
    if (this.productoEnEdicion) {
      this.nuevoProducto = { ...this.productoEnEdicion };
    }
  }

  agregarProducto() {
    if (this.nuevoProducto.nombre && this.nuevoProducto.precio > 0 && this.nuevoProducto.cantidad > 0) {
      if (!this.nuevoProducto.id) {
        this.nuevoProducto.id = Date.now(); // Generar un ID único solo para nuevos productos
      }
      this.productoAgregado.emit({ ...this.nuevoProducto });
      this.nuevoProducto = { id: 0, nombre: '', precio: 0, cantidad: 0, categoria: '', proveedor: '' };
    }
  }
}
