import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { fetchData } from '../../api/apiService';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                p: 1,
                marginY: 2,
                borderRadius: 2,
                textAlign: 'center',
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

export default function MainHeadline() {

    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        // Retrieve news items data from localStorage
        const storedItems = localStorage.getItem('data');
        if (storedItems) {
            setNewsItems(JSON.parse(storedItems));
        }
    }, []);




    return (
        <div style={{ width: '100%' }}>
            <Box
                sx={{
                    display: 'grid',
                    gridAutoFlow: 'column',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridTemplateRows: 'repeat(2, 50%)',
                    gap: 1,
                }}
            >

{/* 
                <Item sx={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
                    <img src={newsItems.articles[1].urlToImage} alt={newsItems.articles[1].title} />
                    <h3>{newsItems.articles[1].title}</h3>
                </Item> */}


                {/* {newsItems.map((item, index) => (
                    <Item key={index} sx={{ gridColumn: 'span 1', gridRow: 'span 1' }}>
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                    </Item>
                ))} */}

                <Item sx={{ gridColumn: 'span 1', gridRow: 'span 1' }}>
                    3
                </Item>
                <Item sx={{ gridColumn: 'span 1', gridRow: 'span 1' }}>
                    4
                </Item>
                <Item sx={{ gridColumn: 'span 1', gridRow: 'span 1' }}>
                    5
                </Item>
            </Box>
        </div>
    );
}