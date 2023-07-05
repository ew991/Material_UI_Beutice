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
        <Box sx={{ width: '100%', marginTop: '150px' }}>
            <Stack
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                direction={{ md: 'column', lg: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}>
                <Item sx={{ display: 'flex', flexDirection: 'column', boxShadow: 'none', maxWidth: '500px', justifyContent: { md: 'center' }, textAlign: { lg: 'start' }, letterSpacing: '1.2px', rowGap: { lg: '20px' } }} >
                    <Typography sx={{ fontWeight: '600', color: '#091156' }} variant="h3" color="initial" >Clinic & beauty
                        consultant</Typography>
                    <Typography sx={{ fontWeight: '500', color: '#091156' }} variant="subtitle1" color="initial">It is a long established fact that a reader will be
                        by the readable content of a page.</Typography>

                    <Button sx={{ fontSize: '16px', fontWeight: '500', letterSpacing: '1.2px', color: '#fff', backgroundColor: '#ff64ae', width: '200px', height: '58px', borderRadius: '50px', textTransform: 'capitalize', marginTop: '15px' }}
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