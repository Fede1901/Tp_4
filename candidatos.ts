
class lista_candidatos{
    nombre_partido: string
    num_lista: number
    presidente: string
    vicepresidente: string
    

    constructor(nombre_partido:string,num_lista:number,presidente:string,vicepresidente:string){
        this.nombre_partido=nombre_partido
        this.num_lista=num_lista
        this.presidente=presidente
        this.vicepresidente=vicepresidente}

        asignar_voto(pers:Votante):void{
            const num_lista=this.num_lista
            pers.voto=num_lista}
    
            mostrar_lista(){
                console.log(
                `Nombre del partido: ${this.nombre_partido}
        Numero de lista: ${this.num_lista}
        Presidente: ${this.presidente}
        Vicepresidente: ${this.vicepresidente}
        `)}}

class Votante{
    dni: number 
    nombre: string
    voto: number|undefined

    constructor(dni:number,nombre:string,voto:number|undefined){
        this.dni=dni
        this.nombre=nombre
        this.voto=voto}

    registrar_voto(){
        const voto= new votos(this.dni,this.voto)
        this.mostrar()
        voto.mostrar(this.voto)}

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
            console.log("Voto: Sin Emitir")
        }
        else{console.log(`Voto: Lista N°${this.voto}
        `)}}}

const pers_1= new Votante(35052890,"Gastón",0)
const pers_2= new Votante(33528663,"Manuel",0)
const pers_3= new Votante(15895223,"Lautaro",0)
const pers_4= new Votante(22587124,"Maximiliano",0)
const lista_votantes: Votante[]=[pers_1,pers_2,pers_3,pers_4]

const lista_electoral1= new lista_candidatos("Unión por la Patria",125,"Pablo Vargas","Raul Salinas")
const lista_electoral2= new lista_candidatos("Juntos por el Cambio",140,"Juan Romero","Julian Alvarez")
const lista_electoral3= new lista_candidatos("La Libertad Avanza",532,"Juan Perez","Cristian Medina")
const vector_electoral: lista_candidatos[]=[lista_electoral1,lista_electoral2,lista_electoral3]

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
