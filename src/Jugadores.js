import React from 'react';
import { connect } from 'react-redux';
import { Box, Icon, Stack,Button } from '@chakra-ui/core';

const Jugadores = ({ jugadores, agregarTitular, agregarSuplente }) => {

    return(
        <Box   m="2" p="3" borderWidth="1px" >
        <h2><Icon name="sun"/> Jugadores</h2>
        <Stack isInline>
            {
                jugadores.map(j => (
                   <Box key = { j.id }>
                   <h3> { j.nombre } </h3>
                   <img src= {j.foto} alt={j.nombre} width="80px" height="80px" />
                   <div>
                   <Button onClick= { () => agregarSuplente(j) } > Suplente </Button>
                   <Button onClick= { () => agregarTitular(j) } > Titular </Button>
                   </div>
                   </Box> 
                ))
            }
        </Stack>
        </Box>
    );
};

const mapStateToProps = state => ({
    jugadores: state.jugadores
});

const mapDispatchToProps = dispatch => ({

    agregarTitular(jugador){
        dispatch({
            type:"AGREGAR_TITULAR",
            jugador
        })
    },

    agregarSuplente(jugador){
        dispatch({
            type:"AGREGAR_SUPLENTE",
            jugador
        })
    }

});


export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);