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
  `,
    );

    return <StyledTextarea aria-label="minimum height" minRows={10} placeholder="Your inquiry here" />;
}


export default function Contactus() {
    return (
        <div>
            <Stack
                sx={{ display: 'flex', justifyContent: 'center' }}
                direction={{ md: 'column', lg: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Box sx={{ display: { xs: 'contents' }, boxShadow: 'none' }}>
                    <img src={Contactimg} />
                </Box>
                <Box sx={{ display: { lg: 'block', xs: 'contents' }, boxShadow: 'none', maxWidth: '500px' }}>
                    <Box>
                        <Typography gutterBottom variant="h5" component="div">
                            Contact Us
                        </Typography>
                        <Typography variant='h3' color="text.secondary">
                            Send your inquiry to
                            our expert team
                        </Typography >
                        <Typography variant='subtitle1' color="text.secondary">
                            Lorem ipsum dolor sit amet nulla turapis tellus.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <Box  >
                            <TextField sx={{ float: 'left' }}
                                id="outlined-controlled"
                                label="First name"

                            />
                            <TextField sx={{ float: 'right' }}
                                id="outlined-uncontrolled"
                                label="Last name"

                            />
                        </Box>
                        <TextField
                            id="outlined-uncontrolled"
                            label="Email address"

                        />
                        <TextField
                            id="outlined-uncontrolled"
                            label="Subject message"
                        />
                        <EmptyTextarea />
                    </Box>
                    <Button sx={{ float: 'left', color: 'inherit', backgroundColor: '#ff64ae', width: '158px', borderRadius: '50px', textTransform: 'capitalize', marginTop: '30px' }}
                    >
                        Contact
                    </Button>
                </Box>
            </Stack>
        </div >
    );
}