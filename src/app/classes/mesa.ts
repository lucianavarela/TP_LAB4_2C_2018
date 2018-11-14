export class Mesa {
    public id: number = 0;
    public codigo: string = '';
    public estado: string = '';

    constructor(id: number, codigo: string, estado: string) {
        this.id = id;
        this.codigo = codigo;
        this.estado = estado;
    }

    public static toMesa(list: Array<any>) {
        let lista_de_mesas = new Array<Mesa>();
        for (var i in list) {
            let new_mesa = new Mesa(list[i].id, list[i].codigo, list[i].estado);
            lista_de_mesas.push(new_mesa);
        }
        return lista_de_mesas;
    }

    public cerrar() {
        console.log('cerrando', this.id);
    }
}
