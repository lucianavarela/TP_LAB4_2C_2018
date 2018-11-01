export class Comanda {
    public id: number = 0;
    public nombreCliente: string = '';
    public codigo: string = '';
    public idMesa: string = '';
    public foto: string = '';
    public importe: number = 0;

    constructor(id: number, nombreCliente: string, codigo: string, idMesa: string, foto: string, importe: number) {
        this.id = id;
        this.nombreCliente = nombreCliente;
        this.codigo = codigo;
        this.idMesa = idMesa;
        this.foto = foto;
        this.importe = importe;
    }

    public static toComanda(list: Array<any>) {
        let lista_de_empleados = new Array<Comanda>();
        for (var i in list) {
            let new_empleado = new Comanda(list[i].id, list[i].nombreCliente, list[i].codigo, list[i].idMesa, list[i].foto, list[i].importe);
            lista_de_empleados.push(new_empleado);
        }
        return lista_de_empleados;
    }
}
