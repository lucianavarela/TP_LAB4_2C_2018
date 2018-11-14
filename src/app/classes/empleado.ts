export class Empleado {
    public id: number = 0;
    public usuario: string = '';
    public clave: string = '';
    public sector: string = '';
    public estado: string = '';
    public sueldo: number = 0;

    constructor(id: number, usuario: string, clave: string, sector: string, estado: string, sueldo: number) {
        this.id = id;
        this.usuario = usuario;
        this.clave = clave;
        this.sector = sector;
        this.estado = estado;
        this.sueldo = sueldo;
    }

    public static toEmpleado(list: Array<any>) {
        let lista_de_empleados = new Array<Empleado>();
        for (var i in list) {
            let new_empleado = new Empleado(list[i].id, list[i].usuario, list[i].clave, list[i].sector, list[i].estado, list[i].sueldo);
            lista_de_empleados.push(new_empleado);
        }
        return lista_de_empleados;
    }

    public activar() {

    }

    public deshabilitar() {
        
    }
}
