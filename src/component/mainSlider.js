import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ImgSlider from '../asset/Frame 1.png';
import Typography from '@mui/material/Typography'

// import { Button } from '@mui/base';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicStack() {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                direction={{ md: 'column', lg: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}>
                <Item sx={{ flexDirection: 'column', boxShadow: 'none' }} >
                    <Typography variant="h3" color="initial">Clinic & beauty
                        consultant</Typography>
                    <Typography variant="subtitle1" color="initial">It is a long established fact that a reader will be
                        by the readable content of a page.</Typography>

                    <Button sx={{ color: '#fff', backgroundColor: '#ff64ae', width: '200px', height: '58px', borderRadius: '50px', textTransform: 'capitalize' }}
                    >
                        More Details
                    </Button>

                </Item>
                <Item sx={{ boxShadow: 'none' }} >
                    <img src={ImgSlider} />
                </Item>
            </Stack>
        </Box>
    );
}