export class Log {
    public id: number = 0;
    public usuario: string = '';
    public fecha: Date;
    public accion: string = '';

    constructor(id: number, usuario: string, fecha: Date, accion: string) {
        this.id = id;
        this.usuario = usuario;
        this.fecha = fecha;
        this.accion = accion;
    }

    public static toLog(list: Array<any>) {
        let lista_de_logs = new Array<Log>();
        for (var i in list) {
            let new_log = new Log(list[i].id, list[i].idEmpleado, list[i].fecha, list[i].accion);
            lista_de_logs.push(new_log);
        }
        return lista_de_logs;
    }
}
