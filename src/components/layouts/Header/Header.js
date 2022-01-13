import * as React from "react";
import Image from "next/image";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Paper from "@mui/material/Paper";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

import { makeStyles } from "@mui/styles";
import { Button, Grid } from "@mui/material";

const useStyles = makeStyles(() => ({
    ab: {
        backgroundColor: "#fff !important",
        color: "#666666",
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
}));

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "10px",
    backgroundColor: "#F4F4F4",
    maxWidth: "750px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 10px 5px 10px",
    [theme.breakpoints.up("sm")]: {
        maxWidth: "750px",
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
        transition: "0.25s ease-in-out",
        width: "100%",
    },
}));

const ButtonBasket = styled("div")(() => ({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
}));

const ButtonCategory = styled(Button)(({ theme }) => ({
    backgroundColor: "#9AA3C0",
    color: "#fff",
    borderRadius: "7.5px",
    transition: "0.25s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "210px",
    "&:hover": {
        backgroundColor: "#9AA3C0",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    },
}));

export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                >
                    <Badge badgeContent={4} color="error">
                        MailIcon
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        NotificationsIcon
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    AccountCircle
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={classes.ab}>
                <Toolbar>
                    <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                        <Grid item lg={1.5} md={1} sm={1} xs={2} className={classes.logo}>
                            <Image
                                src="/images/logo.svg"
                                width={120}
                                height={30}
                            />
                        </Grid>
                        <Grid item lg={1.5} md={1.7} sm={2.5} xs={3}>
                            <ButtonCategory>
                                <MenuIcon />
                                <Typography
                                    sx={{ textTransform: "capitalize", mr: 2, ml: 2}}
                                >
                                    Категории
                                </Typography>
                                <Image
                                    src="/images/vector.svg"
                                    width={12}
                                    height={6}
                                />
                            </ButtonCategory>
                        </Grid>
                        <Grid item lg={4} md={3} sm={4} xs={3}>
                            <Search>
                                <StyledInputBase
                                    placeholder="Найти"
                                    inputProps={{ "aria-label": "search" }}
                                />
                                <div>
                                    <Image
                                        src="/images/search.svg"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            </Search>
                        </Grid>
                        <Grid item lg={2.25} md={2.25}>
                            <ButtonBasket>
                                <Image
                                    src="/images/item-basket.png"
                                    width={26}
                                    height={26}
                                />
                                <Typography sx={{fontSize: "1.4rem"}} display={{xs: "none", sm: "none", md: "block"}}>Корзина</Typography>
                                <Box>
                                    <Typography sx={{fontSize: "1.3rem", fontWeight: "600"}} display={{xs: "none", sm: "none", md: "block"}}>159</Typography>
                                </Box>
                            </ButtonBasket>
                        </Grid>
                        <Grid item lg={2.25} md={2.9}>
                            <ButtonBasket>
                                <Image
                                    src="/images/profile.svg"
                                    width={28}
                                    height={32}
                                />
                                <Typography sx={{fontSize: "1.4rem"}} display={{xs: "none", sm: "none", md: "block"}}>Мой профиль</Typography>
                            </ButtonBasket>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
