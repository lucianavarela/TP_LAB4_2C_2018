export class Encuesta {
    public id: number = 0;
    public idComanda: string = '';
    public comentario: string = '';
    public puntosMozo: number = 0;
    public puntosMesa: number = 0;
    public puntosRestaurante: number = 0;
    public puntosCocinero: number = 0;
    public promedio: number = 0;

    constructor(id: number, idComanda: string, comentario: string, puntosMozo: number, puntosMesa: number, puntosRestaurante: number, puntosCocinero: number) {
        this.id = id;
        this.idComanda = idComanda;
        this.comentario = comentario;
        this.puntosMozo = puntosMozo;
        this.puntosMesa = puntosMesa;
        this.puntosRestaurante = puntosRestaurante;
        this.puntosCocinero = puntosCocinero;
        this.promedio = (puntosCocinero + puntosMesa + puntosMozo + puntosRestaurante) / 4;
    }

    public static toEncuesta(list: Array<any>) {
        let lista_de_encuestas = new Array<Encuesta>();
        for (var i in list) {
            let new_encuesta = new Encuesta(list[i].id, list[i].idComanda, list[i].comentario, list[i].puntosMozo, list[i].puntosMesa, list[i].puntosRestaurante, list[i].puntosCocinero);
            lista_de_encuestas.push(new_encuesta);
        }
        return lista_de_encuestas;
    }
}
