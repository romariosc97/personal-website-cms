import React, { Fragment } from 'react';
import { Box, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
           
import Breadcrumb from './../components/Breadcrumb';
import Form from './../components/Form';

function PortfolioNew() {
    return (
        <Fragment>
            <Breadcrumb path={[{name: "Portafolio", path: "/portfolio", icon: faFolder}, {name: "Nuevo"}]} />
            <Box w="100%" p={8} minH="500px" color="#112D4E" backgroundColor="#FFF" borderRadius="xl">
                <Box mb={8}>
                    <Text fontSize="md" fontWeight="500">Formulario de portafolio</Text>
                    <Text fontSize="sm" fontWeight="400">Rellena los campos para agregar un nuevo proyecto.</Text>
                </Box>
                <Box>
                    <Form />
                </Box>
            </Box>
        </Fragment>
    )
}

export default PortfolioNew;