import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logoImg from '../asset/Main Logo.svg';

const pages = ['Home +', 'About', 'Service', 'Gallery', 'Blog'];


function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: '#fff', boxShadow: 'none', padding: '0 150px', paddingTop: '45px' }}>
            <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, float: 'left' }} >

                    <img src={logoImg} />
                </Box>

                <Box sx={{ flexGrow: 1, justifyContent: 'end', display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}

                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                        <Button sx={{ color: 'inherit', backgroundColor: '#ff64ae', width: '158px', borderRadius: '50px' }}
                        >
                            Contact
                        </Button>
                    </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: { md: 'center' }, flex: { md: 'none' }, gap: '25px', }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: '#8B8B8B', fontSize: '16px', display: 'block', textTransform: 'capitalize' }}
                        >
                            {page}
                        </Button>
                    ))}
                    <Button sx={{ fontSize: '16px', color: 'inherit', backgroundColor: '#ff64ae', width: '158px', height: '52px', borderRadius: '50px', textTransform: 'capitalize' }}
                    >
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default ResponsiveAppBar;