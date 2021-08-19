import React, {  } from 'react';
import { Table, Tr, Th, Td, Tbody, Thead, Link } from "@chakra-ui/react";
function Datatable(props) {
    const data = props.data || [];
    return (
        <Table variant="simple" size="sm">
            <Thead>
                <Tr>
                    <Th>ID</Th>
                    <Th>Nombre</Th>
                    <Th>Imagen</Th>
                    <Th>URL</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    data.map((v, k) => {
                        return(
                            <Tr key={k}>
                                <Td>{v.id}</Td>
                                <Td>{v.name}</Td>
                                <Td wordBreak="break-all">{v.image}</Td>
                                <Td>
                                    <Link wordBreak="break-all" target="_blank" href={v.url}>
                                        {v.url}
                                    </Link>
                                </Td>
                            </Tr>
                        )
                    })
                }
            </Tbody>
        </Table>
    )
}

export default Datatable;