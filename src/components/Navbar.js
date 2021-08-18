import React, {  } from 'react';
import {
    Link
} from 'react-router-dom';
import { Box, Avatar, Menu, MenuButton, MenuItem, MenuList, MenuDivider, Text, Switch } from "@chakra-ui/react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faOutdent } from '@fortawesome/free-solid-svg-icons';
function Sidebar() {
    return (
        <Box w="100%" p={4} borderBottomWidth="1px" height="75px" display="flex" justifyContent="flex-end" flexDirection="row">
            <Menu>
                <MenuButton display="block">
                    <Avatar h="100%" w="100%" cursor="pointer" name="Romario Sarmiento" src="https://bit.ly/dan-abramov" />
                </MenuButton>
                <MenuList>
                    <Box px="0.8rem">
                        <Text fontSize="md" fontWeight="300">Romario Sarmiento</Text>
                        <Text fontSize="sm" fontWeight="400">Administrador</Text>
                    </Box>
                    <MenuDivider />
                    <MenuItem>
                        <Link to="/configuration">
                            <Text fontSize="sm" fontWeight="300">Configuración</Text>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/logout">
                            <Text fontSize="sm" fontWeight="300">Cerrar sesión</Text>
                        </Link>
                    </MenuItem>
                    <MenuDivider />
                    <Box px="0.8rem">
                        <Text as="span" fontSize="sm" fontWeight="400">Modo oscuro</Text>
                        <Switch size="sm" float="right" />
                    </Box>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default Sidebar;