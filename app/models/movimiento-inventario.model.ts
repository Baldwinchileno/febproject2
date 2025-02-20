export interface MovimientoInventario {
    id: number;
    productoId: number;
    productoNombre: string;
    tipo: 'entrada' | 'salida';  // Define si el movimiento es de entrada o salida
    cantidad: number;
    origen: string;
    destino: string;
    fecha: Date;
  }
  