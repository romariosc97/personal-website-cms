import React, { Fragment } from 'react';
import { Box, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
           
import Breadcrumb from './../components/Breadcrumb';

function CertificationNew() {
    return (
        <Fragment>
            <Breadcrumb path={[{name: "Certificaciones", path: "/certification", icon: faAward}, {name: "Nuevo"}]} />
            <Box w="100%" p={8} minH="500px" color="#112D4E" backgroundColor="#FFF" borderRadius="xl">
                <Box>
                    <Text fontSize="md" fontWeight="500">Formulario de certificacion</Text>
                    <Text fontSize="sm" fontWeight="400">Rellena los campos para agregar una nueva certificacion.</Text>
                </Box>
            </Box>
        </Fragment>
    )
}

export default CertificationNew;