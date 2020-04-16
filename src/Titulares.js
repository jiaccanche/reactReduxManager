import React from 'react'
import { connect } from 'react-redux'

const Titulares = ({ titulares, regresarAJugadores }) => {

    return(
        <section >
        <h2>Titulares</h2>
        <div className="contenedor-jugadores">
            {
                titulares.map(j => (
                    <article key = { j.id }>
                   <h3> { j.nombre } </h3>
                   <img src= {j.foto} alt={j.nombre} width="80px" height="80px" />
                   <button onClick = { () => regresarAJugadores(j) }> x </button>
                   </article> 
                ))
            }
        </div>
        </section>
    );
}

const mapStateToProps = state => ({
    titulares: state.titulares
});

const mapDispatchToProps = dispatch => ({
    regresarAJugadores(jugador){
        dispatch({
            type:"REGRESAR_TITULAR",
            jugador
        })
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Titulares);