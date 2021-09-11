import React, { Fragment, useState, useEffect } from 'react';
import { Box, Text } from "@chakra-ui/react";
import { faFolder } from '@fortawesome/free-solid-svg-icons';
           
import Breadcrumb from './../components/Breadcrumb';
import Form from './../components/Form';

import TypeService from "../services/TypeService";

function PortfolioNew() {
    const [types, setTypes] = useState([]);
    const fields = [
        {
            label: "Nombre",
            name: "name",
            type: "text",
            w: "500px",
            helperText: "No excedas los 255 caracteres.",
            required: true
        },
        {
            label: "Tipo de proyecto",
            name: "project_type_id",
            type: "select",
            options: types,
            w: "500px",
            helperText: "Es un campo requerido.",
            required: true
        },
        {
            label: "Resumen",
            name: "short_description",
            type: "textarea",
            w: "100%",
            helperText: "Es un campo requerido.",
            required: true
        },
        {
            label: "Descripción",
            name: "description",
            type: "textarea",
            w: "100%",
            helperText: "Es un campo requerido.",
            required: true
        },
        {
            label: "Desarrollo",
            name: "development",
            type: "textarea",
            w: "100%",
            helperText: "Es un campo requerido.",
            required: true
        },
        {
            label: "Imagen principal",
            name: "image",
            type: "file",
            w: "500px",
            helperText: "Peso máximo de 20mb.",
            required: true
        },
        {
            label: "Galería",
            name: "gallery",
            type: "gallery",
            w: "100%",
            helperText: "Peso máximo de 20mb."
        }
    ];
    useEffect(() => {
        const getTypes = async () => {
            const response = await TypeService.getTypes();
            setTypes(response.data.data);
        };
        getTypes();
    }, []);
    return (
        <Fragment>
            <Breadcrumb path={[{name: "Portafolio", path: "/portfolio", icon: faFolder}, {name: "Nuevo"}]} />
            <Box w="100%" p={8} minH="500px" color="#112D4E" backgroundColor="#FFF" borderRadius="xl">
                <Box mb={8}>
                    <Text fontSize="md" fontWeight="500">Formulario de portafolio</Text>
                    <Text fontSize="sm" fontWeight="400">Rellena los campos para agregar un nuevo proyecto.</Text>
                </Box>
                <Box>
                    {
                        types.length > 0 ?
                            <Form
                                fields={fields}
                            />
                        : ""
                    }
                    
                </Box>
            </Box>
        </Fragment>
    )
}

export default PortfolioNew;