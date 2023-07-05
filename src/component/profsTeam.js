import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, CardMedia, Grid } from '@mui/material';
import imgServ1 from '../asset/unsplash_pTrhfmj2jDA.png';
import imgServ2 from '../asset/unsplash_FVh_yqLR9eA.png';
import imgServ3 from '../asset/unsplash_mEZ3PoFGs_k.png';
import Fb from '../asset/Facebook.png';
import inTa from '../asset/instagram.png';
import twitter from '../asset/twitter.png'

export default function ActionAreaCard2() {
    return (
        <>
            <Box sx={{ marginTop: '150px' }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '16px', color: '#FF64AE', fontWeight: '600', letterSpacing: '1.2px' }}>
                    Professional Teams
                </Typography>
                <Typography variant='h3' color="text.secondary" sx={{ fontSize: '36px', fontWeight: '600', color: '#091156', letterSpacing: '1.2px' }}>
                    The Professional expert
                </Typography>
                <Typography variant='subtitle1' color="text.secondary" sx={{ fontSize: '16px', fontWeight: '400', letterSpacing: '1.2px' }} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                </Typography>
            </Box>
            <Card sx={{ margin: '0 140px', boxShadow: 'none', marginTop: '85px' }}  >
                <Grid container spacing={2}  >
                    <Grid item lg={4}  >
                        <CardActionArea sx={{ boxShadow: 'inherit', borderRadius: '42px', minHeight: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                            <CardMedia sx={{ width: '50%' }}
                                component="img"
                                height="140"
                                image={imgServ1}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '16px', color: '#FF64AE', fontWeight: '600', letterSpacing: '1.2px' }} >
                                    Surgeon
                                </Typography>
                                <Typography variant='h4' color="text.secondary" sx={{ fontSize: '18px', color: '#091156', fontWeight: '600', letterSpacing: '1.2px' }}>
                                    Briyan Nevalli
                                </Typography >
                                <Typography variant='subtitle1' color="text.secondary" sx={{ fontSize: '14px', fontWeight: '400', letterSpacing: '1.2px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={twitter} />
                                <img src={Fb} />
                                <img src={inTa} />

                            </Box>
                        </CardActionArea>
                    </Grid>
                    <Grid item lg={4}>
                        <CardActionArea sx={{ boxShadow: 'inherit', borderRadius: '42px', minHeight: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <CardMedia sx={{ width: '50%' }}
                                component="img"
                                // height="140"
                                image={imgServ2}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '16px', color: '#FF64AE', fontWeight: '600', letterSpacing: '1.2px' }} >
                                    Dermatologist
                                </Typography>
                                <Typography variant='h4' color="text.secondary" sx={{ fontSize: '18px', color: '#091156', fontWeight: '600', letterSpacing: '1.2px' }}>
                                    Bella sebastian
                                </Typography >
                                <Typography variant='subtitle1' color="text.secondary" sx={{ fontSize: '14px', fontWeight: '400', letterSpacing: '1.2px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={twitter} />
                                <img src={Fb} />
                                <img src={inTa} />

                            </Box>
                        </CardActionArea>
                    </Grid>
                    <Grid item lg={4}>
                        <CardActionArea sx={{ borderRadius: '42px', minHeight: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <CardMedia sx={{ width: '50%' }}
                                component="img"
                                // height="140"
                                image={imgServ3}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '16px', color: '#FF64AE', fontWeight: '600', letterSpacing: '1.2px' }} >
                                    Stylist expert
                                </Typography>
                                <Typography variant='h4' color="text.secondary" sx={{ fontSize: '18px', color: '#091156', fontWeight: '600', letterSpacing: '1.2px' }}>
                                    Lilly Adams
                                </Typography >
                                <Typography variant='subtitle1' color="text.secondary" sx={{ fontSize: '14px', fontWeight: '400', letterSpacing: '1.2px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={twitter} />
                                <img src={Fb} />
                                <img src={inTa} />

                            </Box>
                        </CardActionArea>

                    </Grid>



                </Grid>

            </Card>
        </>

    );
}