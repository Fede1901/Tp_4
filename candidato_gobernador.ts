class lista_candidatos_provinciales{
    nombre_partido: string
    num_lista: number
    can_gobernador: string
    can_vicegobernador: string


    constructor(nombre_partido:string,num_lista:number,can_gobernador:string,can_vicegobernador:string){
        this.nombre_partido=nombre_partido
        this.num_lista=num_lista
        this.can_gobernador=can_gobernador
        this.can_vicegobernador=can_vicegobernador}

        asignar_voto(pers:Votante):void{
            const num_lista=this.num_lista
            pers.elector_nro=num_lista}

            mostrar_lista(){
                console.log(
                `Nombre del partido: ${this.nombre_partido}
        Número de lista: ${this.num_lista}
        Gobernador: ${this.can_gobernador}
        Vicegobernador: ${this.can_vicegobernador}
        `)}}

class Votante{
    dni: number 
    nombre: string
    elector_nro: number|undefined

    constructor(dni:number,nombre:string,voto:number|undefined){
        this.dni=dni
        this.nombre=nombre
        this.elector_nro=voto}

    registrar_voto(){
        const voto= new votos(this.dni,this.elector_nro)
        this.mostrar()
        voto.mostrar(this.elector_nro)}

    mostrar(){
        console.log(
            `Votante
Nombre: ${this.nombre}
Dni: ${this.dni}`)}}

class votos{
    voto:number|undefined
    dni_votante:number

    constructor(dni_votante:number, voto:number|undefined){
        this.dni_votante=dni_votante
        this.voto=voto}

    mostrar(numero_voto:number|undefined){
        if (numero_voto == 0){
            console.log("VOTO: NO EMITIDO")
        }
        else{console.log(`VOTO: LISTA N°${this.voto}
        `)}}}

const pers_1= new Votante(35052890,"Matías Sack",0)
const pers_2= new Votante(18089225,"Bruno Aramanague",0)
const pers_3= new Votante(14023699,"Emilia Catapulta",0)
const pers_4= new Votante(18945532,"Marcelo Fernández",0)
const lista_votantes: Votante[]=[pers_1,pers_2,pers_3,pers_4]

const lista_electoral1= new lista_candidatos_provinciales("Cambia Mendoza",501,"Lisandro Capdevila","Nahuel Acevedo")
const lista_electoral2= new lista_candidatos_provinciales("Frente Elegí",503,"Gerónimo Parés","Bruno Flores")
const lista_electoral3= new lista_candidatos_provinciales("Partido Verde",504,"Verónica Sacchi","Cecilia Pérez")
const vector_electoral: lista_candidatos_provinciales[]=[lista_electoral1,lista_electoral2,lista_electoral3]

vector_electoral.forEach(objeto => {
    objeto.mostrar_lista()})

lista_electoral1.asignar_voto(pers_1)
pers_1.registrar_voto()

lista_electoral2.asignar_voto(pers_2)
pers_2.registrar_voto()

lista_electoral3.asignar_voto(pers_3)
pers_3.registrar_voto()

lista_electoral2.asignar_voto(pers_4)
pers_4.registrar_voto()