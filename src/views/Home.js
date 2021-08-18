import React, { Fragment } from 'react';
import { Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';

import Breadcrumb from './../components/Breadcrumb';

function Home() {
    return (
        <Fragment>
            <Breadcrumb  />
            <Box w="100%" p={8} minH="500px" color="#112D4E" backgroundColor="#FFF" borderRadius="xl">
                Hola
            </Box>
        </Fragment>
    )
}

export default Home;