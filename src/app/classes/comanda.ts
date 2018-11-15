import { ComandaService } from "../services/comanda/comanda.service";

//import * as base64 from 'base64-img';

export class Comanda {
    public id: number = 0;
    public nombreCliente: string = '';
    public codigo: string = '';
    public idMesa: string = '';
    public foto: string = '';
    public tipoFoto: string = '';
    public importe: number = 0;

    constructor(id: number, nombreCliente: string, codigo: string, idMesa: string, foto: string, tipoFoto: string, importe: number) {
        this.id = id;
        this.nombreCliente = nombreCliente;
        this.codigo = codigo;
        this.idMesa = idMesa;
        this.foto = foto;
        this.tipoFoto = tipoFoto;
        this.importe = importe;
    }

    public static toComanda(list: Array<any>) {
        console.log(list);
        let lista_de_empleados = new Array<Comanda>();
        for (var i in list) {
            let new_empleado = new Comanda(list[i].id, list[i].nombreCliente, list[i].codigo, list[i].idMesa, list[i].foto, list[i].tipoFoto, list[i].importe);
            lista_de_empleados.push(new_empleado);
        }
        return lista_de_empleados;
    }

    public cobrar() {

    }

    public cargarFoto(event) {
        let comanda = this;
        let file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            comanda.guardarFoto({
                'foto': reader.result.toString().split(',')[1],
                'tipo': file.type
            });
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    public guardarFoto(objeto) {
        console.log('3', objeto);
        ComandaService.instance.subirFoto(objeto, this.codigo);
    }
}
