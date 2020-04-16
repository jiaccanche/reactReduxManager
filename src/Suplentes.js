import React from 'react'
import { connect } from 'react-redux'

const Suplentes = ({ suplentes, regresarAJugadores }) => {

    return(
        <section>
        <h2>Suplentes</h2>
        <div className="contenedor-jugadores">
            {
                suplentes.map(j => (
                   <article key = { j.id }>
                   <h3> { j.nombre } </h3>
                   <img src= {j.foto} alt={j.nombre} width="80px" height="80px" />
                   <button onClick = { () => regresarAJugadores(j) } > x </button>
                   </article> 
                ))
            }
        </div>
        </section>
    );
}

const mapStateToProps = state => ({
    suplentes: state.suplentes
});

const mapDispatchToProps = dispatch => ({
    
    regresarAJugadores(jugador){
        dispatch({
            type:"REGRESAR_SUPLENTE",
            jugador
        })
    }


});


export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);