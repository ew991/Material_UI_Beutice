import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import logoft from '../asset/Footer Logo.png';
import bgfooter from '../asset/FooterBG.png';
import { Stack, Typography } from '@mui/material';
import bottomBg from '../asset/Bottom BG.png'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Footerr() {
    return (
        <>
            <Box sx={{ flexGrow: 1, backgroundImage: `url(${bgfooter})`, backgroundRepeat: 'no-repeat', height: '700px', display: 'flex', alignItems: 'center', marginTop: '150px' }}>

                <Grid container spacing={2} sx={{ margin: '0 150px' }}>
                    <Grid xs={12} md={5} lg={6}

                    >
                        <Item sx={{ boxShadow: 'none', backgroundColor: 'transparent ' }}>
                            <img src={logoft} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '50px', marginTop: '30px' }}
                            >
                                <Typography variant="body1" color="#D7DBFF">
                                    Beautice is a Beauty Clinic WordPress Theme.
                                </Typography>
                                <Typography variant="body1" color="#D7DBFF" sx={{ marginTop: '20px' }}>
                                    Baker Steet 101, NY, United States.
                                </Typography>
                                <Typography variant="body1" color="#D7DBFF">
                                    +521 569 8966. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mail@company.com.
                                </Typography>
                            </Box>

                        </Item>
                    </Grid>
                    <Grid container xs={12} md={6} lg={5} spacing={4}>
                        <Grid xs={6} md={6} lg={6}>
                            <Item sx={{ boxShadow: 'none', backgroundColor: 'transparent ' }}>
                                <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', rowGap: '15px', color: '#D7DBFF' }}>
                                    <Typography variant="body1" color="#FFFFFF">
                                        Pages
                                    </Typography>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Services</li>
                                    <li>Gallery</li>
                                    <li>Team</li>

                                </Box>
                            </Item>
                        </Grid>
                        <Grid xs={6} md={6} lg={6}>
                            <Item sx={{ boxShadow: 'none', backgroundColor: 'transparent ' }}>

                                <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', rowGap: '15px', color: '#D7DBFF' }}>
                                    <Typography variant="body1" color="#FFFFFF">
                                        Informations
                                    </Typography>
                                    <li> Terms & conditions</li>
                                    <li> Privacy policy</li>
                                    <li> Blog</li>
                                    <li> Contact</li>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                    <Grid
                        xs={12}
                        container
                        justifyContent="space-between"
                        alignItems="center"
                        flexDirection={{ xs: 'column', sm: 'row' }}
                        sx={{ fontSize: '12px', marginTop: { xs: '30px', lg: '100px' } }}
                    >
                        <Grid sx={{ order: { xs: 2, sm: 1 } }}>
                            <Item sx={{ backgroundColor: 'transparent ', boxShadow: 'none' }}><svg width="305" height="28" viewBox="0 0 305 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M292.505 7.66661C289.399 7.66661 286.895 10.4559 286.895 13.914C286.895 17.3721 289.399 20.1615 292.505 20.1615C295.61 20.1615 298.115 17.3721 298.115 13.914C298.115 10.4559 295.61 7.66661 292.505 7.66661ZM292.505 17.9757C290.498 17.9757 288.857 16.1542 288.857 13.914C288.857 11.6739 290.493 9.85239 292.505 9.85239C294.517 9.85239 296.152 11.6739 296.152 13.914C296.152 16.1542 294.512 17.9757 292.505 17.9757V17.9757ZM299.653 7.41106C299.653 8.22121 299.067 8.86825 298.345 8.86825C297.617 8.86825 297.036 8.21577 297.036 7.41106C297.036 6.60634 297.622 5.95387 298.345 5.95387C299.067 5.95387 299.653 6.60634 299.653 7.41106ZM303.369 8.89C303.286 6.93802 302.886 5.20896 301.602 3.7844C300.322 2.35983 298.77 1.91398 297.017 1.81611C295.21 1.70192 289.795 1.70192 287.988 1.81611C286.24 1.90854 284.688 2.3544 283.403 3.77896C282.119 5.20353 281.724 6.93258 281.636 8.88456C281.533 10.8963 281.533 16.9263 281.636 18.9381C281.719 20.8901 282.119 22.6191 283.403 24.0437C284.688 25.4682 286.235 25.9141 287.988 26.012C289.795 26.1261 295.21 26.1261 297.017 26.012C298.77 25.9195 300.322 25.4737 301.602 24.0437C302.881 22.6191 303.281 20.8901 303.369 18.9381C303.472 16.9263 303.472 10.9018 303.369 8.89V8.89ZM301.035 21.0967C300.654 22.1624 299.917 22.9834 298.955 23.4129C297.515 24.0491 294.097 23.9023 292.505 23.9023C290.913 23.9023 287.49 24.0437 286.055 23.4129C285.098 22.9888 284.36 22.1678 283.975 21.0967C283.403 19.4927 283.535 15.6866 283.535 13.914C283.535 12.1415 283.408 8.32996 283.975 6.7314C284.355 5.66569 285.093 4.84467 286.055 4.41512C287.495 3.77896 290.913 3.92577 292.505 3.92577C294.097 3.92577 297.52 3.7844 298.955 4.41512C299.912 4.83923 300.649 5.66026 301.035 6.7314C301.606 8.33539 301.475 12.1415 301.475 13.914C301.475 15.6866 301.606 19.4981 301.035 21.0967Z" fill="white" />
                                <path d="M233.857 7.54354C233.584 6.4005 232.781 5.50028 231.761 5.19478C229.912 4.63965 222.5 4.63965 222.5 4.63965C222.5 4.63965 215.088 4.63965 213.239 5.19478C212.219 5.50033 211.416 6.4005 211.143 7.54354C210.648 9.61536 210.648 13.938 210.648 13.938C210.648 13.938 210.648 18.2607 211.143 20.3325C211.416 21.4755 212.219 22.3382 213.239 22.6437C215.088 23.1989 222.5 23.1989 222.5 23.1989C222.5 23.1989 229.912 23.1989 231.761 22.6437C232.781 22.3382 233.584 21.4755 233.857 20.3325C234.352 18.2607 234.352 13.938 234.352 13.938C234.352 13.938 234.352 9.61536 233.857 7.54354V7.54354ZM220.076 17.8627V10.0134L226.271 13.9381L220.076 17.8627V17.8627Z" fill="white" />
                                <path d="M146.459 24.3589H141.924V8.09604H146.459V24.3589ZM144.189 5.87763C142.739 5.87763 141.562 4.54007 141.562 2.9252C141.563 2.14952 141.839 1.4056 142.332 0.857115C142.824 0.308626 143.492 0.000488281 144.189 0.000488281C144.886 0.000488281 145.554 0.308626 146.046 0.857115C146.539 1.4056 146.815 2.14952 146.815 2.9252C146.815 4.54007 145.639 5.87763 144.189 5.87763ZM163.433 24.3589H158.907V16.4423C158.907 14.5555 158.873 12.1359 156.549 12.1359C154.191 12.1359 153.83 14.1858 153.83 16.3063V24.3589H149.3V8.09604H153.649V10.3144H153.713C154.318 9.03669 155.797 7.68825 158.004 7.68825C162.594 7.68825 163.438 11.0539 163.438 15.4255V24.3589H163.433Z" fill="white" />
                                <g clip-path="url(#clip0_98_201)">
                                    <path d="M18.3174 15.6593L19.0117 10.6212H14.6704V7.35173C14.6704 5.97339 15.2769 4.62984 17.2212 4.62984H19.1948V0.340373C19.1948 0.340373 17.4038 0 15.6914 0C12.1162 0 9.7793 2.41306 9.7793 6.78136V10.6212H5.80518V15.6593H9.7793V27.8388H14.6704V15.6593H18.3174Z" fill="white" />
                                </g>
                                <path d="M92.4302 8.24912C92.446 8.49641 92.446 8.74375 92.446 8.99103C92.446 16.5336 87.2906 25.2244 77.868 25.2244C74.9651 25.2244 72.2684 24.2882 70 22.6632C70.4125 22.7161 70.809 22.7338 71.2373 22.7338C73.6326 22.7338 75.8375 21.8329 77.5983 20.2962C75.3458 20.2431 73.4581 18.6004 72.8077 16.3393C73.125 16.3923 73.4422 16.4276 73.7754 16.4276C74.2354 16.4276 74.6955 16.357 75.1237 16.2334C72.776 15.7034 71.0152 13.4071 71.0152 10.6338V10.5632C71.6973 10.9871 72.4905 11.2521 73.3312 11.2874C71.9511 10.2628 71.0469 8.51408 71.0469 6.53567C71.0469 5.47584 71.3007 4.50431 71.7449 3.65642C74.2671 7.1186 78.0583 9.37958 82.3096 9.62692C82.2303 9.20298 82.1827 8.76142 82.1827 8.3198C82.1827 5.17554 84.4669 2.61426 87.3064 2.61426C88.7816 2.61426 90.1141 3.30316 91.05 4.41601C92.208 4.16872 93.3184 3.69176 94.302 3.0382C93.9212 4.36305 93.1122 5.47589 92.0494 6.18241C93.0805 6.05882 94.0799 5.7408 94.9999 5.29924C94.3021 6.4297 93.4295 7.43652 92.4302 8.24912V8.24912Z" fill="white" />
                                <defs>
                                    <clipPath id="clip0_98_201">
                                        <rect width="25" height="27.8388" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></Item>
                        </Grid>
                        <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
                            <Grid>
                                <Item sx={{ boxShadow: 'none', backgroundColor: 'transparent ', color: '#D7DBFF' }}>© AltDesain Studio 2021 - All right reserved.</Item>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
                {/* <img className=' absolute -z-50 bottom-0' src={bottomBg} /> */}
            </Box >

        </>

    );
}