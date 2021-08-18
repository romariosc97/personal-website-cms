import React, { Fragment } from 'react';
import { Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
           
import Breadcrumb from './../components/Breadcrumb';

function Certification() {
    return (
        <Fragment>
            <Breadcrumb path={[{name: "Certificaciones", icon: faAward}]} />
            <Box w="100%" p={8} minH="500px" color="#112D4E" backgroundColor="#FFF" borderRadius="xl">
                Certification
            </Box>
        </Fragment>
    )
}

export default Certification;