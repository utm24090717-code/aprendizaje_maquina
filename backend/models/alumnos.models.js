import {Schema, model} from "mongoose";

const Esqueleto_tabla = new Schema({
    nombre:String,
    edad:Number,
    materia:String
})

export const Tabla = new model("Tabla de alumnos reprobados", Esqueleto_tabla)