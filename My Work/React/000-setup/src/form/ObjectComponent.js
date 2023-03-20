import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useState } from "react"
import { FormControl, TextField, Typography } from "@mui/material"

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



export const ObjectComponent = () => {

    const initialProduct = { id: 0, name: 'Adsız', price: 100.0 }
    const [product, setProduct] = useState(initialProduct);
    const [errors, setErrors] = useState({});

    // Slide in Alert - 0
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // Slide in Alert - 1






    const nameChanged = (event) => {
        event.preventDefault();
        setProduct({
            id: product.id,
            name: event.target.value,
            price: product.price
        });
    }

    const priceChanged = (event) => {
        event.preventDefault();
        setProduct({
            ...product,
            price: event.target.value
        });
    }

    const isValid = () => {
        let valid = true;
        let errors = {};
        if (product.name.length < 3) {
            valid = false;
            errors['name'] = 'Ad en az 3 olmalı';
        }
        if (product.price < 0) {
            valid = false;
            errors['price'] = 'Fiyat eksi girilemez';
        }
        setErrors(errors);
        return valid;
    }

    const save = (e) => {
        e.preventDefault();
        if (!isValid()) {
            alert('Geçersiz');
            return;
        }
        alert(product.id + product.name + product.price);
    }
    return (
        <>
            <h1>Nesne Biçimi</h1>
            {product.id} {product.name} {product.price} <br />
            <hr />
            <ul>
                {Object.keys(errors).map(key =>
                    <li key={errors}>{errors[key] ? errors[key] : ''}</li>
                )}
            </ul>


            <FormControl onSubmit={save} sx={{ color: '#FFF' }} >
                <React.Fragment>
                    <Card>
                        <CardContent>
                            <Typography variant="span" component="body1" value="color" >
                                Öz: {product.id} <br />
                            </Typography>

                            <TextField id="outlined-basic" label="Adı:" variant="outlined" value={product.name || ''} onChange={nameChanged} sx={{ color: "#FFF", margin: 2 }} /><br />
                            
                            <TextField id="outlined-basic" label="Ederi:" variant="outlined" value={product.price || ''} onChange={priceChanged} sx={{ color: "#FFF", margin: 2 }} /><br />
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" onClick={handleClickOpen} sx={{ bgcolor: "#FFF" }}>
                                Gönder-Slide
                            </Button>
                        </CardActions>
                    </Card>
                </React.Fragment>
            </FormControl>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Sonuç Ne?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        The values gathered are:
                        {product.id}, {product.name}, {product.price}.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose}>Agree</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}