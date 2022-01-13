import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import {
    styled,
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    Grid,
    InputBase,
    Container,
    Paper,
    Icon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    // AppBar ab
    ab: {
        backgroundColor: "#fff !important",
        color: "#666666",
        height: "100%",
        maxHeight: "7.5rem",
    },
    container: {
        maxWidth: "1920px",
    },
    toolbar: {
        minHeight: "64px",
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    categoryGrid: {
        display: "block",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    buttonCategory: {
        backgroundColor: "#9AA3C0",
        color: "#fff",
        borderRadius: "7.5px",
        transition: "0.25s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        fontWeight: "600",
        fontSize: "24px",
        minWidth: "160px",
        maxWidth: "210px",

        "&:hover": {
            backgroundColor: "#9AA3C0",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        },
    },
    searchGrid: {
        maxWidth: "750px",
    },
    search: {
        position: "relative",
        borderRadius: "10px",
        backgroundColor: "#F4F4F4",
        maxWidth: "750px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px 10px 5px 10px",
        boxShadow: 0,
        [theme.breakpoints.up("sm")]: {
            maxWidth: "750px",
        },
        "& .MuiInputBase-input": {
            transition: "0.25s ease-in-out",
            width: "100%",
        },
    },
    menuGrid: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    basket: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        marginRight: "10px",
        [theme.breakpoints.up("md")]: {
            maxWidth: "200px",
        },
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    profile: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        [theme.breakpoints.up("md")]: {
            maxWidth: "250px",
        },
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    mdMenu: {
        display: "none",
        [theme.breakpoints.down("md")]: {
            display: "block",
        },
    },
    mdButtonMenu: {
        backgroundColor: "#9AA3C0",
        color: "#fff",
        borderRadius: "7.5px",
        transition: "0.25s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        fontWeight: "600",
        fontSize: "24px",
        minWidth: "40px",
        maxWidth: "40px",

        "&:hover": {
            backgroundColor: "#9AA3C0",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        },
    },
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={classes.ab}>
                <Container className={classes.container}>
                    <Toolbar className={classes.toolbar}>
                        <Grid
                            container
                            spacing={0}
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid
                                item
                                md={1.5}
                                sm={2}
                                xs={2}
                                className={classes.logo}
                            >
                                <Image
                                    src="/images/logo.svg"
                                    width={120}
                                    height={30}
                                />
                            </Grid>
                            <Grid
                                item
                                md={2}
                                xs={0}
                                className={classes.categoryGrid}
                            >
                                <Button className={classes.buttonCategory}>
                                    <MenuIcon />
                                    <Typography
                                        sx={{
                                            textTransform: "capitalize",
                                            mr: 2,
                                            ml: 2,
                                        }}
                                    >
                                        Категории
                                    </Typography>
                                    <Image
                                        src="/images/vector.svg"
                                        width={12}
                                        height={6}
                                    />
                                </Button>
                            </Grid>
                            <Grid
                                item
                                xl={4.5}
                                lg={4}
                                md={6}
                                sm={8}
                                xs={8}
                                className={classes.searchGrid}
                            >
                                <Paper
                                    elevation={0}
                                    component="form"
                                    className={classes.search}
                                >
                                    <InputBase
                                        placeholder="Найти"
                                        sx={{width: "100%"}}
                                        inputProps={{
                                            "aria-label": "search",
                                        }}
                                    />
                                    <Icon
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <Link href="#">
                                            <Image
                                                src="/images/search.svg"
                                                width={20}
                                                height={20}
                                            />
                                        </Link>
                                    </Icon>
                                </Paper>
                            </Grid>
                            <Grid item lg={3.8} className={classes.menuGrid}>
                                <Paper elevation={0} className={classes.basket}>
                                    <Image
                                        src="/images/basket.svg"
                                        width={26}
                                        height={26}
                                    />
                                    <Typography
                                        sx={{ fontSize: "1.4rem" }}
                                        display={{
                                            xs: "none",
                                            lg: "block",
                                        }}
                                    >
                                        Корзина
                                    </Typography>
                                    <Box>
                                        <Typography
                                            sx={{
                                                fontSize: "1.3rem",
                                                fontWeight: "600",
                                            }}
                                            display={{
                                                xs: "none",
                                                lg: "block",
                                            }}
                                        >
                                            159
                                        </Typography>
                                    </Box>
                                </Paper>
                                <Paper
                                    elevation={0}
                                    className={classes.profile}
                                >
                                    <Image
                                        src="/images/profile.svg"
                                        width={28}
                                        height={32}
                                    />
                                    <Typography
                                        sx={{ fontSize: "1.4rem" }}
                                        display={{
                                            xs: "none",
                                            lg: "block",
                                        }}
                                    >
                                        Мой профиль
                                    </Typography>
                                </Paper>
                                <Paper className={classes.mdMenu} elevation={0}>
                                    <Button className={classes.mdButtonMenu}>
                                        <MenuIcon />
                                    </Button>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
