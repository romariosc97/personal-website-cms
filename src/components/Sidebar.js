import React, { Fragment } from 'react';
import {
    Link,
    useLocation
} from 'react-router-dom';
import { Box, Stack, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAward, faFolder } from '@fortawesome/free-solid-svg-icons';
function Sidebar() {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <Fragment>
            <Box w="100%" py={4} minH="700px" color="#112D4E">
                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem border="none" my={1}>
                        <h2>
                            <Link to="/">
                                <AccordionButton>
                                    <Box w="1.25rem" mr="0.75rem" textAlign="center" display="inline-block">
                                        <FontAwesomeIcon icon={faHome} />
                                    </Box>
                                    Inicio
                                </AccordionButton>
                            </Link>
                        </h2>
                    </AccordionItem>

                    <AccordionItem border="none" my={1}>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    <Box w="1.25rem" mr="0.75rem" textAlign="center" display="inline-block">
                                        <FontAwesomeIcon icon={faAward} />
                                    </Box>
                                    Certificaciones
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel border="none" pb={4} px={0}>
                            <Stack direction="column" spacing="0.75rem">
                                <Link className={"sidebar-link" + (currentPath==="/certification" ? " active" : "")} to="/certification">Listar</Link>
                                <Link className={"sidebar-link" + (currentPath==="/certification/new" ? " active" : "")} to="/certification/new">Nuevo</Link>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem border="none" my={1}>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    <Box w="1.25rem" mr="0.75rem" textAlign="center" display="inline-block">
                                        <FontAwesomeIcon icon={faFolder} />
                                    </Box>
                                    Portafolio
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel border="none" pb={4} px={0}>
                            <Stack direction="column" spacing="0.75rem">
                                <Link className={"sidebar-link" + (currentPath==="/portfolio" ? " active" : "")} to="/portfolio">Listar</Link>
                                <Link className={"sidebar-link" + (currentPath==="/portfolio/new" ? " active" : "")} to="/portfolio/new">Nuevo</Link>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>
            </Box>
        </Fragment>
    )
}

export default Sidebar;