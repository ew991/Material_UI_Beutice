import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
import Contactimg from '../asset/Contact Animations.png'
import { Box, Button, TextField, Typography, styled } from '@mui/material';


import TextareaAutosize from '@mui/base/TextareaAutosize';
// import styled from '@emotion/styled';


export function EmptyTextarea() {

    const StyledTextarea = styled(TextareaAutosize)(
        `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border: 1px solid #d7dbff;
    border-radius: 12px 12px 0 12px;
    max-height: 300px;
    min-height:200px;
  `,
    );

    return <StyledTextarea aria-label="minimum height" maxRows={15} minRows={10} placeholder="Your inquiry here" />;
}


export default function Contactus() {
    return (
        <div>
            <Stack
                sx={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}
                direction={{ md: 'column', lg: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Box sx={{ display: { xs: 'contents' }, boxShadow: 'none' }}>
                    <img src={Contactimg} className=' max-h-[614px]' />
                </Box>
                <Box sx={{ display: { lg: 'block', xs: 'contents' }, boxShadow: 'none', maxWidth: '500px' }}>
                    <Box sx={{ textAlign: 'initial' }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '16px', color: '#FF64AE', fontWeight: '600', letterSpacing: '1.2px' }}>
                            Contact Us
                        </Typography>
                        <Typography variant='h3' color="text.secondary" sx={{ fontSize: '36px', color: '#091156', fontWeight: '600', letterSpacing: '1.2px' }}>
                            Send your inquiry to
                            our expert team
                        </Typography >
                        <Typography variant='subtitle1' color="text.secondary">
                            Lorem ipsum dolor sit amet nulla turapis tellus.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '38px', marginTop: '44px' }}>
                        <Box sx={{ display: { lg: 'block', md: 'flex' }, flexDirection: { md: 'column' }, gap: { md: '20px' } }} >
                            <TextField sx={{ borderRadius: '50px', border: 'none', float: { lg: 'left', md: 'none' } }}
                                id="outlined-controlled"
                                label="First name"

                            />
                            <TextField sx={{ borderRadius: '50px', border: 'none', float: { lg: 'right', md: 'none' } }}
                                id="outlined-uncontrolled"
                                label="Last name"

                            />
                        </Box>
                        <TextField sx={{ borderRadius: '50px', border: 'none' }}
                            id="outlined-uncontrolled"
                            label="Email address"

                        />
                        <TextField sx={{ borderRadius: '50px', border: 'none' }}
                            id="outlined-uncontrolled"
                            label="Subject message"
                        />
                        <EmptyTextarea />
                    </Box>
                    <Button sx={{ float: { lg: 'left' }, color: '#FFFFFF', backgroundColor: '#ff64ae', width: { lg: '258px', md: 'auto' }, height: '58px', borderRadius: '50px', textTransform: 'capitalize', marginTop: '30px' }}
                    >
                        Send Message
                    </Button>
                </Box>
            </Stack>
        </div >
    );
}