import React, { Fragment } from 'react';
import { Box, FormControl, FormLabel, Input, FormHelperText, Button, Textarea, Select } from "@chakra-ui/react";
function Form(props) {
    const handleSubmit = () => {
        console.log('enviado')
    };
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <Box display="flex" justifyContent="space-between">
                    <FormControl mb={6} w="500px" isRequired>
                        <FormLabel fontSize="xs">Nombre</FormLabel>
                        <Input type="text" size="sm"/>
                        <FormHelperText fontSize="xs">No excedas los 255 caracteres.</FormHelperText>
                    </FormControl>
                    <FormControl mb={6} w="400px" isRequired>
                        <FormLabel fontSize="xs">Tipo de proyecto</FormLabel>
                        <Select placeholder="Seleccione una opción" size="sm">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                        <FormHelperText fontSize="xs">Es un campo requerido.</FormHelperText>
                    </FormControl>
                </Box>
                <FormControl mb={6} w="500px" isRequired>
                    <FormLabel fontSize="xs">Resumen</FormLabel>
                    <Textarea
                        placeholder="Descripción breve y precisa del proyecto"
                        size="sm"
                    />
                    <FormHelperText fontSize="xs">No hay límite de caracteres.</FormHelperText>
                </FormControl>
                <FormControl mb={6} isRequired>
                    <FormLabel fontSize="xs">Descripción</FormLabel>
                    <Textarea
                        placeholder="Descripción detallada sobre la finalidad del proyecto"
                        size="sm"
                    />
                    <FormHelperText fontSize="xs">No hay límite de caracteres.</FormHelperText>
                </FormControl>
                <FormControl mb={6} isRequired>
                    <FormLabel fontSize="xs">Desarrollo</FormLabel>
                    <Textarea
                        placeholder="Descripción acerca del desarrollo del proyecto"
                        size="sm"
                    />
                    <FormHelperText fontSize="xs">No hay límite de caracteres.</FormHelperText>
                </FormControl>
                <Button
                type="submit"
                transition="0.2s all ease-in-out"
                _hover={{
                    background: "#1089FF",
                }}
                color="#F9F7F7" backgroundColor="#3F72AF">Guardar</Button>
            </form>
        </Fragment>
    )
}

export default Form;