import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, CardMedia, Grid } from '@mui/material';
import imgServ1 from '../asset/Animation1.png';
import imgServ2 from '../asset/Animation2.png';
import imgServ3 from '../asset/Animation3.png';

export default function ActionAreaCard() {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '150px' }}>
                <Box sx={{ maxWidth: '850px' }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '16px', color: '#FF64AE', fontWeight: '600', letterSpacing: '1.2px' }}>
                        Main Services
                    </Typography>
                    <Typography variant='h3' color="text.secondary" sx={{ marginTop: '15px', fontSize: '36px', lineHeight: '45px', color: '#091156', fontWeight: '600', letterSpacing: '1.2px' }}>
                        Learn services to focus
                        on your beauty
                    </Typography>
                    <Typography variant='subtitle1' color="text.secondary" sx={{ marginTop: '15px', fontSize: '16px', lineHeight: '24px', fontWeight: '400', letterSpacing: '1.2px' }}>
                        Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
                    </Typography>
                </Box>
                <Card sx={{ margin: '0 140px', boxShadow: 'none' }}  >
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
                                    <Typography gutterBottom variant="h5" component="div">
                                        Beauty consultation
                                    </Typography>
                                    <Typography variant='subtitle1' color="text.secondary">
                                        Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
                                    </Typography>
                                </CardContent>
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
                                    <Typography gutterBottom variant="h5" component="div">
                                        Skin treatments
                                    </Typography>
                                    <Typography variant='subtitle1' color="text.secondary">
                                        Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
                                    </Typography>
                                </CardContent>
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
                                    <Typography gutterBottom variant="h5" component="div">
                                        Beauty product
                                    </Typography>
                                    <Typography variant='subtitle1' color="text.secondary">
                                        Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Grid>



                    </Grid>

                </Card>
            </Box>

        </>

    );
}