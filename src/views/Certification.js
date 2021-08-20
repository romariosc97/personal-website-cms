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
    const [columns, setColumns] = useState([]);
    const [labels, setLabels] = useState([]);
    useEffect(() => {
        const getCertifications = async () => {
            const response = await CertificationService.getCertifications();
            setColumns(['id', 'name', 'image', 'url']);
            setLabels(['ID', 'Nombre', 'Imagen', 'URL']);
            setCertificacions(response.data.data);
        };
        getCertifications();
    }, []);
    return (
        <Fragment>
            <Breadcrumb path={[{name: "Certificaciones", icon: faAward}]} />
            <Box w="100%" p={8} minH="500px" color="#112D4E" backgroundColor="#FFF" borderRadius="xl">
                <Box mb={8} display="flex">
                    <Box>
                        <Text fontSize="md" fontWeight="500">Listado de certificaciones</Text>
                        <Text fontSize="sm" fontWeight="400">Certificaciones registradas en la base de datos.</Text>
                    </Box>
                    <Box ml="auto">
                        <Link to="/certification/new">
                            <Button
                            transition="0.2s all ease-in-out"
                            _hover={{
                                background: "#1089FF",
                            }}
                            color="#F9F7F7" backgroundColor="#3F72AF">Nuevo</Button>
                        </Link>
                    </Box>
                </Box>
                <Datatable data={certifications} columns={columns} labels={labels} />
            </Box>
        </Fragment>
    )
}

export default Certification;