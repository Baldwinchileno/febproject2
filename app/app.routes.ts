import { Routes } from '@angular/router';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: '**', redirectTo: '' } // Redirigir cualquier ruta inválida al dashboard
];
