import { Injectable } from "@angular/core";
import { ComandaService } from "../services/comanda/comanda.service";

@Injectable()
export class Comanda {
    public id: number = 0;
    public nombreCliente: string = '';
    public codigo: string = '';
    public idMesa: string = '';
    public foto: string = '';
    public importe: number = 0;
    public service: ComandaService;
    public file: File = null;

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

    public subirFoto(event) {
        this.file = event.target.files[0];
    }

    public guardarFoto() {
        const formdata = new FormData();
        formdata.append("foto", this.file);
        console.log(formdata);
        ComandaService.instance.subirFoto(formdata, this.codigo)
            .then(data => {
                console.log(data);
            })
            .catch(e => {
                console.info(e);
            });
    }
}
