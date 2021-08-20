import React, { Fragment, useState, useEffect } from 'react';
import {
    Link
} from 'react-router-dom';
import { Box, Text, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
           
import Breadcrumb from './../components/Breadcrumb';
import Datatable from './../components/Datatable';

import CertificationService from "../services/CertificationService";
import PortfolioService from '../services/PortfolioService';

function Portfolio() {
    const [certifications, setCertificacions] = useState([]);
    const [columns, setColumns] = useState([]);
    const [labels, setLabels] = useState([]);
    useEffect(() => {
        const getPortfolio = async () => {
            const response = await PortfolioService.getPortfolio();
            setColumns(['id', 'name', 'image', 'short_description']);
            setLabels(['ID', 'Nombre', 'Imagen', 'Resumen']);
            setCertificacions(response.data.data);
        };
        getPortfolio();
    }, []);
    return (
        <Fragment>
            <Breadcrumb path={[{name: "Portafolio", icon: faFolder}]} />
            <Box w="100%" p={8} minH="500px" color="#112D4E" backgroundColor="#FFF" borderRadius="xl">
                <Box mb={8} display="flex">
                    <Box>
                        <Text fontSize="md" fontWeight="500">Listado de portafolio</Text>
                        <Text fontSize="sm" fontWeight="400">Proyectos registrados en la base de datos.</Text>
                    </Box>
                    <Box ml="auto">
                        <Link to="/portfolio/new">
                            <Button
                            transition="0.2s all ease-in-out"
                            _hover={{
                                background: "#1089FF",
                            }}
                            colorScheme="blue">Nuevo</Button>
                        </Link>
                    </Box>
                </Box>
                <Datatable data={certifications} columns={columns} labels={labels} />
            </Box>
        </Fragment>
    )
}

export default Portfolio;