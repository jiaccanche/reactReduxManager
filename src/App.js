import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Jugadores from './Jugadores';
import EquipoSeleccionado from './EquipoSeleccionado';

const App = () => {
  return (
    <Provider store = { store }>
      <h1 >Ejemplo redux</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </Provider>
  );
}

export default App;
