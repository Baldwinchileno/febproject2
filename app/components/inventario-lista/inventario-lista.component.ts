import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-inventario-lista',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe], // ✅ Importamos lo necesario para la plantilla
  templateUrl: './inventario-lista.component.html',
  styleUrls: ['./inventario-lista.component.css']
})
export class InventarioListaComponent {
  @Input() productos: Producto[] = [];
  @Output() editarProducto = new EventEmitter<Producto>();
  @Output() eliminarProducto = new EventEmitter<number>();

  onEditar(producto: Producto) {
    this.editarProducto.emit(producto);
  }

  onEliminar(id: number) {
    this.eliminarProducto.emit(id);
  }
}
