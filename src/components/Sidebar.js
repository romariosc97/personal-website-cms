import React, { Fragment } from 'react';
import {
    Link
} from 'react-router-dom';
import { Box, Stack, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAward, faFolder } from '@fortawesome/free-solid-svg-icons'
function Sidebar() {
    return (
        <Fragment>
            <Box w="100%" p={4} borderBottomWidth="1px">
                Romario CMS
            </Box>
            <Box w="100%" p={4} minH="500px">
                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem border="none">
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

                    <AccordionItem border="none">
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
                        <AccordionPanel border="none" pb={4}>
                            <Stack pl="2rem" direction="column" spacing="0.5rem">
                                <Link className="sidebar-link" to="/certification">Listar</Link>
                                <Link className="sidebar-link" to="/certification">Nuevo</Link>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem border="none">
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
                        <AccordionPanel border="none" pb={4}>
                            <Stack pl="2rem" direction="column" spacing="0.5rem">
                                <Link className="sidebar-link" to="/portfolio">Listar</Link>
                                <Link className="sidebar-link" to="/portfolio">Nuevo</Link>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>
            </Box>
        </Fragment>
    )
}

export default Sidebar;