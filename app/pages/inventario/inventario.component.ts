import { Component } from '@angular/core';
import { InventarioListaComponent } from '../../components/inventario-lista/inventario-lista.component';
import { InventarioFormComponent } from '../../components/inventario-form/inventario-form.component';
import { DashboardInventarioComponent } from '../../components/dashboard-inventario/dashboard-inventario.component';
import { InventarioMovimientosComponent } from '../../components/inventario-movimientos/inventario-movimientos.component';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../models/producto.model';
import { MovimientoInventario } from '../../models/movimiento-inventario.model';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [
    InventarioListaComponent,
    InventarioFormComponent,
    DashboardInventarioComponent,
    InventarioMovimientosComponent,
    FormsModule
  ],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {
  productos: Producto[] = [
    { id: 1, nombre: 'Lomo Vetado', precio: 15000, cantidad: 10, categoria: 'Carne de Res', proveedor: 'Proveedor A' },
    { id: 2, nombre: 'Filete', precio: 18000, cantidad: 5, categoria: 'Carne de Res', proveedor: 'Proveedor B' },
    { id: 3, nombre: 'Pollo Entero', precio: 9000, cantidad: 15, categoria: 'Carne de Pollo', proveedor: 'Proveedor C' }

    
  ];

  get productosBajoStock(): Producto[] {
    // El método filter recorre el array y retorna los productos que cumplan la condición:
    // La cantidad actual es menor o igual al stock mínimo.
    return this.productos.filter(p => p.cantidad <= p.stockMinimo);
  }

  movimientos: MovimientoInventario[] = [];

  productoEnEdicion: Producto | null = null;

  agregarProducto(nuevoProducto: Producto) {
    if (this.productoEnEdicion) {
      // Editar un producto existente
      const index = this.productos.findIndex(p => p.id === this.productoEnEdicion!.id);
      this.productos[index] = { ...nuevoProducto, id: this.productoEnEdicion.id };

      // Registrar movimiento de edición
      this.registrarMovimiento(nuevoProducto, 0, 'Edición', 'Inventario', 'entrada');

      this.productoEnEdicion = null;
    } else {
      // Agregar un nuevo producto
      this.productos.push(nuevoProducto);
      this.registrarMovimiento(nuevoProducto, nuevoProducto.cantidad, 'Ingreso', 'Inventario', 'entrada');
    }
  }

  editarProducto(producto: Producto) {
    this.productoEnEdicion = { ...producto };
  }

  eliminarProducto(id: number) {
    const producto = this.productos.find(p => p.id === id);
    if (producto) {
      this.registrarMovimiento(producto, producto.cantidad, 'Inventario', 'Eliminado', 'salida');
    }
    this.productos = this.productos.filter(p => p.id !== id);
  }

  registrarMovimiento(producto: Producto, cantidad: number, origen: string, destino: string, tipo: 'entrada' | 'salida') {
    const movimiento: MovimientoInventario = {
      id: Date.now(),
      productoId: producto.id,
      productoNombre: producto.nombre,
      tipo,
      cantidad,
      origen,
      destino,
      fecha: new Date()
    };

    this.movimientos.push(movimiento);
  }

  get productosBajoStock(): Producto[] {
    return this.productos.filter(p => p.cantidad <= p.stockMinimo);
  }
}
