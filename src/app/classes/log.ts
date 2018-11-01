export class Log {
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

    public static toLog(list: Array<any>) {
        let lista_de_logs = new Array<Log>();
        for (var i in list) {
            let new_log = new Log(list[i].id, list[i].usuario, list[i].clave, list[i].sector, list[i].estado, list[i].sueldo);
            lista_de_logs.push(new_log);
        }
        return lista_de_logs;
    }
}
