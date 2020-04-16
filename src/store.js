import { createStore } from 'redux'
import jugadores from './jugadores.json'
const initialState = {
    jugadores: jugadores,
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
    console.log(action);
    if(action.type === "AGREGAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j=> j.id !== action.jugador.id)
        }

    }

    if(action.type === "AGREGAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j=> j.id !== action.jugador.id)
        }

    }

    if(action.type === "REGRESAR_TITULAR"){
        return {
            ...state,
            jugadores: state.jugadores.concat(action.jugador),
            titulares: state.titulares.filter(j=> j.id !== action.jugador.id)
        }

    }

    if(action.type === "REGRESAR_SUPLENTE"){
        return {
            ...state,
            jugadores: state.jugadores.concat(action.jugador),
            suplentes: state.suplentes.filter(j=> j.id !== action.jugador.id)
        }

    }




    return state;
}

export default createStore(reducerEntrenador)