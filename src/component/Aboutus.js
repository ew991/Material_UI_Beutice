import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import imgAboutus from '../asset/unsplash_LRXYS0tSyGc.png'
import playbtnImg from '../asset/Play_button.png'
import { Box, Button, Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Aboutus() {
    return (
        <div>
            <Stack
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '150px', marginLeft: { lg: '150px' }, marginRight: { lg: '60px' } }}
                direction={{ md: 'column', lg: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Item sx={{ boxShadow: 'none', maxWidth: '570px', textAlign: 'initial' }}>
                    <Box>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#FF64AE', fontSize: '16px' }}>
                            About Us
                        </Typography>
                        <Typography variant='h3' color="text.secondary" sx={{ color: '#091156', fontSize: '36px', fontWeight: '600', marginTop: '10px' }}>
                            We are the best beauty clinic
                        </Typography >
                        <Typography variant='subtitle1' color="text.secondary" sx={{ letterSpacing: '1.2px', marginTop: '10px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
                            <br />
                            <br />
                            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: '50px' }}>
                        <Button sx={{ color: '#FFFFFF', backgroundColor: '#ff64ae', width: '200px', height: '58px', borderRadius: '50px', textTransform: 'capitalize', fontSize: '16px', letterSpacing: '1.2px' }}
                        >
                            Learn More
                        </Button>
                        <Button sx={{ color: 'inherit', width: '200px', borderRadius: '50px', textTransform: 'capitalize', marginLeft: '44px', fontSize: '16px', letterSpacing: '1.2px', gap: '10px' }}
                        >
                            <img src={playbtnImg} />  Watch Video
                        </Button>
                    </Box>

                </Item>
                <Item sx={{ boxShadow: 'none' }}>
                    <img src={imgAboutus} />
                </Item>
            </Stack>
        </div>
    );
}