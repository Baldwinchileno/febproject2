import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-dashboard-inventario',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard-inventario.component.html',
  styleUrls: ['./dashboard-inventario.component.css']
})
export class DashboardInventarioComponent {
  @Input() productos: Producto[] = []; // ✅ Agregar Input para recibir productos

  get productosMasVendidos(): Producto[] {
    return [...this.productos]
      .sort((a, b) => b.cantidad - a.cantidad)
      .slice(0, 5);
  }

  get productosStockCritico(): Producto[] {
    return this.productos.filter(p => p.cantidad <= 5);
  }
}
