import { PedidoService } from "../services/pedido/pedido.service";

export class Pedido {
    public id: number = 0;
    public idComanda: string = '';
    public descripcion: string = '';
    public sector: string = '';
    public estado: string = '';
    public idEmpleado: number = 0;
    public estimacion: Date;
    public fechaIngresado: Date;
    public fechaEntregado: Date;
    public tiempo_restante: number;

    constructor(id: number, idComanda: string, descripcion: string, sector: string, estado: string, idEmpleado: number, estimacion: Date, fechaIngresado: Date, fechaEntregado: Date) {
        this.id = id;
        this.idComanda = idComanda;
        this.descripcion = descripcion;
        this.sector = sector;
        this.estado = estado;
        this.idEmpleado = idEmpleado;
        this.estimacion = estimacion;
        this.fechaIngresado = fechaIngresado;
        this.fechaEntregado = fechaEntregado;
        this.tiempo_restante = (new Date().getTime() - new Date(estimacion).getTime())/60;
    }

    public static toPedido(list: Array<any>) {
        let lista_de_pedidos = new Array<Pedido>();
        for (var i in list) {
            let new_pedido = new Pedido(list[i].id, list[i].idComanda, list[i].descripcion, list[i].sector, list[i].estado, list[i].idEmpleado, list[i].estimacion, list[i].fechaIngresado, list[i].fechaEntregado);
            lista_de_pedidos.push(new_pedido);
        }
        return lista_de_pedidos;
    }

    public tomar(estimacion) {
        PedidoService.instance.tomar({
            'idPedido': this.id,
            'estimacion': estimacion
        });
    }

    public entregar() {
        PedidoService.instance.entregar({
            'idPedido': this.id
        });
    }

    public servir() {
        PedidoService.instance.servir({
            'idPedido': this.id
        });
    }

    public cancelar() {
        PedidoService.instance.cancelar({
            'idPedido': this.id
        });
    }
}
