import React, { Fragment } from 'react';
import { Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
           
import Breadcrumb from './../components/Breadcrumb';

function CertificationNew() {
    return (
        <Fragment>
            <Breadcrumb path={[{name: "Certificaciones", path: "/certification", icon: faAward}, {name: "Nuevo"}]} />
            <Box w="100%" p={8} minH="500px" color="#112D4E" backgroundColor="#FFF" borderRadius="xl">
                CertificationNew
            </Box>
        </Fragment>
    )
}

export default CertificationNew;