import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react";

function createData(id, name, price) {
    return { id, name, price };
}

const initialProducts = [
    createData( 301, "Cep Telefonu", 2350.0 ),
    createData( 302, "Masaüstü Bilgisayar", 6545.0 ),
    createData( 303, "Dizüstü Bilgisayar", 9865.0 )
];

export const ProductTable = () => {

    const [productArray, setProductArray] = useState(initialProducts);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Ürün Adı</TableCell>
                        <TableCell align="right">Ürün No</TableCell>
                        <TableCell align="right">Ürün Fiyatı</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productArray.map((product) => (
                        <TableRow
                            key={product.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {product.name}
                            </TableCell>
                            <TableCell align="right">{product.id}</TableCell>
                            <TableCell align="right">{product.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}