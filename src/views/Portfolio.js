import React, { Fragment } from 'react';
import {
    Link
} from 'react-router-dom';
import { Box, Text, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
           
import Breadcrumb from './../components/Breadcrumb';

function Portfolio() {
    return (
        <Fragment>
            <Breadcrumb path={[{name: "Portafolio", icon: faFolder}]} />
            <Box w="100%" p={8} minH="500px" color="#112D4E" backgroundColor="#FFF" borderRadius="xl">
                <Box mb={6} display="flex">
                    <Box>
                        <Text fontSize="md" fontWeight="500">Listado de portafolio</Text>
                        <Text fontSize="sm" fontWeight="400">Proyectos registrados en la base de datos.</Text>
                    </Box>
                    <Box ml="auto">
                        <Link to="/portfolio/new">
                            <Button
                            _hover={{
                                background: "#4099e3",
                            }}
                            colorScheme="blue">Nuevo</Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Fragment>
    )
}

export default Portfolio;