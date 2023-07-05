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
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                direction={{ md: 'column', lg: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Item sx={{ boxShadow: 'none', maxWidth: '570px' }}>
                    <Box>
                        <Typography gutterBottom variant="h5" component="div">
                            Main Services
                        </Typography>
                        <Typography variant='h3' color="text.secondary">
                            Learn services to focus
                            on your beauty
                        </Typography >
                        <Typography variant='subtitle1' color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.

                            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                        </Typography>
                    </Box>
                    <Box>
                        <Button sx={{ color: 'inherit', backgroundColor: '#ff64ae', width: '158px', borderRadius: '50px' }}
                        >
                            Contact
                        </Button>
                        <Button sx={{ color: 'inherit', width: '158px', borderRadius: '50px' }}
                        >
                            <img src={playbtnImg} /> Watch Video
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