import React, {  } from 'react';
import { Table, Tr, Th, Td, Tbody, Thead, Link } from "@chakra-ui/react";
function Datatable(props) {
    const data = props.data || [];
    const labels = props.labels || [];
    const columns = props.columns || [];
    return (
        <Table variant="simple" size="sm">
            <Thead>
                <Tr>
                    {
                        labels.map((v, k) => {
                            return(
                                <Th key={k}>{v}</Th>
                            )
                        })
                    }
                </Tr>
            </Thead>
            <Tbody>
                {
                    data.map((v, k) => {
                        return(
                            <Tr key={k}>
                                {
                                    columns.map((va, ka) => {
                                        return(
                                            <Td key={ka} wordBreak={va==='image' ? 'break-all' : ''}>
                                                {
                                                    va==='url' ? 
                                                    <Link wordBreak="break-all" target="_blank" href={v[va]}>
                                                        {v[va]}
                                                    </Link> 
                                                    : v[va]
                                                }
                                            </Td>
                                        )
                                    })
                                }
                            </Tr>
                        )
                    })
                }
            </Tbody>
        </Table>
    )
}

export default Datatable;