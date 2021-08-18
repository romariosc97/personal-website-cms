import React, { Fragment } from 'react';
import { Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
           
import Breadcrumb from './../components/Breadcrumb';

function Portfolio() {
    return (
        <Fragment>
            <Breadcrumb path={[{name: "Portafolio", icon: faFolder}]} />
            <Box w="100%" p={8} minH="500px" color="#112D4E" backgroundColor="#FFF" borderRadius="xl">
                Portfolio
            </Box>
        </Fragment>
    )
}

export default Portfolio;