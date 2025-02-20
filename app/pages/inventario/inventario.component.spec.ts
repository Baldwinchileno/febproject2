import { Component, Input } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-inventario-lista',
  templateUrl: './inventario-lista.component.html',
  styleUrls: ['./inventario-lista.component.css']
})
export class InventarioListaComponent {
  @Input() productos: Producto[] = [];
}
