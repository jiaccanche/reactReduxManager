import React, {useState} from 'react';
import { Icon,Button } from "@chakra-ui/core";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/core";
const Equipos = (props) => {
  const [itemSelected, setitemSelected] = useState(<span><Icon name = "drag-handle" mr="4"/>Escoge un equipo nuevo</span>);
  const [currenteIdentifier, setCurrentIdentifier] = useState(null);
  
  const select = event => {
    const identifier = event.target.name;
    const text = event.target.innerText;
    const content = <MenuItem name={identifier}><Icon name = {identifier} mr="4"/> {text} </MenuItem>;
    setCurrentIdentifier(identifier);
    setitemSelected(content);
  }
  
  return (
    <Menu>
      <MenuButton m="4" as={Button} rightIcon="chevron-down" width="auto" >
        {itemSelected}
      </MenuButton>
      <MenuList>
        <MenuItem onClick= {select} name="add"><Icon name="add" mt="1" mr="2" /> Los más </MenuItem>
        <MenuItem onClick= {select} name="sun" ><Icon name="sun" mt="1" mr="2" /> Los soles </MenuItem>
        <MenuItem onClick= {select} name="check" ><Icon name="check" mt="1" mr="2" /> Los palomita </MenuItem>
      </MenuList>
   </Menu>
    );
}

export default Equipos;