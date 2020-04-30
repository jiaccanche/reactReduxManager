import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Jugadores from './Jugadores';
import Equipos from './Equipos';
import EquipoSeleccionado from './EquipoSeleccionado';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
const App = () => {
  return (
    <Provider store = { store }>
    <ThemeProvider>
      <CSSReset />
      <h1 >Ejemplo redux</h1>
      <Equipos/>
      <Jugadores />
      <EquipoSeleccionado />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
