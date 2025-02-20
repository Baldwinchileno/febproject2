import { Component, Input } from '@angular/core';
import { NgFor, DatePipe } from '@angular/common';
import { MovimientoInventario } from '../../models/movimiento-inventario.model';

@Component({
  selector: 'app-inventario-movimientos',
  standalone: true,
  imports: [NgFor, DatePipe],
  templateUrl: './inventario-movimientos.component.html',
  styleUrls: ['./inventario-movimientos.component.css']
})
export class InventarioMovimientosComponent {
  @Input() movimientos: MovimientoInventario[] = [];
}
