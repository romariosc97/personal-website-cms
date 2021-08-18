import React, { Fragment } from 'react';
import {
    Link
} from 'react-router-dom';
import { Box, Breadcrumb, BreadcrumbItem, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';
function Sidebar(props) {
    const path = props.path || [];
    return (
        <Breadcrumb pl={1} mb={6} spacing={2} separator={<FontAwesomeIcon icon={faChevronRight} />}>
            <BreadcrumbItem>
                <Link to="/">
                    <Box mr="0.5rem" display="inline-block">
                        <FontAwesomeIcon icon={faHome} />
                    </Box>
                    <Text fontSize="sm" fontWeight="300" display="inline-block">
                        Inicio
                    </Text>
                </Link>
            </BreadcrumbItem>
            {
                path.map((v, k) => {
                    let Icon = () => (
                        "icon" in v ?
                        <Box w="1.25rem" mr="0.5rem" textAlign="center" display="inline-block">
                            <FontAwesomeIcon icon={v.icon} />
                        </Box>
                        : ''
                    );
                    let Content = (props) => (
                        <Fragment>
                            <Icon />
                            <Text pl={1} fontSize="sm" fontWeight={"last" in props ? "500" : "300"} display="inline-block" >
                                {v.name}
                            </Text>
                        </Fragment>
                    );
                    let Wrapper = () => (
                        k===(path.length-1) ? 
                        <Fragment><Content last /></Fragment> 
                        : <Link to={v.path}><Content /></Link>
                    );
                    return(
                        <BreadcrumbItem key={k}>
                            <Wrapper />
                        </BreadcrumbItem>
                    )
                })
            }
        </Breadcrumb>
    )
}

export default Sidebar;