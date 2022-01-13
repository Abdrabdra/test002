import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/utils/theme";

import "../src/styles/globals.scss";
import "../public/static/fonts/fonts.scss";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>AduTest</title>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
