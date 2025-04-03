import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/material';
import logo from '../../assets/images/logo.png'; 

export const StyledNavLink = styled("a")(() => ({
    textDecoration: "none",
    color: "inherit"
}));

export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        display: "flex",
        justifyContent: "space-between"
    },
    [theme.breakpoints.up('md')]: {
        display: "none",
    },
}));

export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        display: "none",
    },
    [theme.breakpoints.up('md')]: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
}));

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSmoothScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            handleClose();
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="absolute">
                <StyledMobileToolbar>
                    <img src={logo} alt="Logo" style={{ width:"18%"}} />
                    <IconButton
                        size="large"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => handleSmoothScroll("about")}>
                            <StyledNavLink>About</StyledNavLink>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("skills")}>
                            <StyledNavLink>Skills</StyledNavLink>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("projects")}>
                            <StyledNavLink>Projects</StyledNavLink>
                        </MenuItem>
                    </Menu>
                </StyledMobileToolbar>
                <StyledDesktopToolbar>
                    <img src={logo} alt="Logo" style={{ width: "5%" }} />
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <MenuItem onClick={() => handleSmoothScroll("about")}>
                            <StyledNavLink>About</StyledNavLink>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("skills")}>
                            <StyledNavLink>Skills</StyledNavLink>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("projects")}>
                            <StyledNavLink>Projects</StyledNavLink>
                        </MenuItem>
                    </Box>
                </StyledDesktopToolbar>
            </AppBar>
        </Box>
    );
}
