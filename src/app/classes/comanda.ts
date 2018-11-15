//import * as base64 from 'base64-img';

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

    public cobrar() {

    }

    public cargarFoto(event) {
        let file = event.target.files[0];
        console.log(file);

        /*base64.base64('path/demo.png', function(err, data) {
            const formdata = new FormData();
            formdata.append("foto", file);
            console.log(formdata);
            ComandaService.instance.subirFoto(formdata, this.codigo)
                .then(data => {
                    console.log(data);
                })
                .catch(e => {
                    console.info(e);
                });
        })*/
    }
}
