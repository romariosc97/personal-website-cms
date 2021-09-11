import React, { Fragment, useState } from 'react';
import { Box, Grid, Text, FormControl, FormLabel, Input, FormHelperText, Button, Textarea, Select, useToast } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import PortfolioService from "../services/PortfolioService";

function Form(props) {
    const history = useHistory();
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(false);
    let InputFiltered;
    const toast = useToast();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        setLoading(true);
        const formData = new FormData();
        Object.entries(data).forEach(v => {
            if(v[1] instanceof FileList)
                formData.append(v[0], v[1][0]);
            else
                formData.append(v[0], v[1]);
        });
        const response = await PortfolioService.insertPortfolio(formData);
        if(response.data.success === true){
            toast({
                title: "Éxito",
                description: "El proyecto fue registrado con éxito.",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top-right"
            });
            history.push("/portfolio");
        }else{
            toast({
                title: "Error",
                description: "Ocurrió un problema.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top-right"
            });
        }
    };
    const addImage = () => {
        setGallery([...gallery, {}]);
    };
    const deleteImage = (index) => {
        setGallery(gallery.filter((_, k) => k!==index));
    };
    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    props.fields.map((v, k) => {
                        InputFiltered = () => {
                            let tmp;
                            switch (v.type) {
                                case "text":
                                    tmp = <Input {...register(v.name)} type="text" size="sm"/>;
                                    break;
                                case "file":
                                    tmp = <Input {...register(v.name)} h="100%" p={2} type="file" size="sm"/>;
                                    break;
                                case "textarea":
                                    tmp = <Textarea {...register(v.name)} size="sm" />;
                                    break;
                                case "select":
                                    tmp = (
                                        <Select {...register(v.name)} placeholder="Seleccione una opción" size="sm">
                                            {
                                                v.options.map((option, ka) => {
                                                    return (<option key={ka} value={option.id}>{option.name}</option>)
                                                })
                                            }
                                        </Select>
                                    );
                                    break;
                                case "gallery":
                                    tmp = (
                                        <Fragment>
                                            <Box width="100%" marginBottom={{lg: 4}}>
                                                <Button fontSize="0.75rem" onClick={() => addImage()}>
                                                    <Text marginRight="2">Agregar una imagen</Text><FontAwesomeIcon icon={faPlus} />
                                                </Button>
                                            </Box>
                                            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                                                {
                                                    gallery.map((_, ka) => {
                                                        return (
                                                            <Box key={ka} display="flex" gridColumnGap="8px">
                                                                <Input {...register(v.name+ka)} h="100%" p={2} type="file" size="sm" fontSize="0.75rem"/>
                                                                <Button onClick={() => deleteImage(ka)}><FontAwesomeIcon icon={faTrash} /></Button>
                                                            </Box>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                        </Fragment>
                                    );
                                    break;
                                default:
                                    tmp = <Input type="text" size="sm"/>;
                                    break;
                            }
                            return tmp;
                        };
                        return(
                            <FormControl key={k} mb={6} w={v.w} isRequired={v.required}>
                                <FormLabel fontSize="xs">{v.label}</FormLabel>
                                <InputFiltered />
                                <FormHelperText fontSize="xs">{v.helperText}</FormHelperText>
                            </FormControl>
                        )
                    })
                }
                <Button
                    isLoading={loading}
                    disabled={loading}
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