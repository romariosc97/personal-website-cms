import React, { Fragment, useState, useEffect } from 'react';
import {
    Link
} from 'react-router-dom';
import { Box, Text, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
           
import Breadcrumb from './../components/Breadcrumb';
import Datatable from './../components/Datatable';

import CertificationService from "../services/CertificationService";

function Certification() {
    const [certifications, setCertificacions] = useState([]);
    useEffect(() => {
        const getCertifications = async () => {
            const response = await CertificationService.getCertifications();
            setCertificacions(response.data.data);
        };
        getCertifications();
    }, []);
    return (
        <Fragment>
            <Breadcrumb path={[{name: "Certificaciones", icon: faAward}]} />
            <Box w="100%" p={8} minH="500px" color="#112D4E" backgroundColor="#FFF" borderRadius="xl">
                <Box mb={6} display="flex">
                    <Box>
                        <Text fontSize="md" fontWeight="500">Listado de certificaciones</Text>
                        <Text fontSize="sm" fontWeight="400">Certificaciones registradas en la base de datos.</Text>
                    </Box>
                    <Box ml="auto">
                        <Link to="/certification/new">
                            <Button
                            _hover={{
                                background: "#4099e3",
                            }}
                            color="#F9F7F7" backgroundColor="#3F72AF">Nuevo</Button>
                        </Link>
                    </Box>
                </Box>
                <Datatable data={certifications} />
            </Box>
        </Fragment>
    )
}

export default Certification;