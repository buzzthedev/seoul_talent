import "@mantine/core/styles.css";
import Head from "next/head";
import {ColorSchemeScript, MantineProvider} from "@mantine/core";
import {theme} from "../theme";
import "../styles/App.css"

export default function App({Component, pageProps}: any) {
    return (
        <>
            <ColorSchemeScript defaultColorScheme="dark"/>
            <MantineProvider defaultColorScheme="dark" theme={theme}>
                <Head>
                    <title>Mantine Template</title>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                    />
                    <link rel="shortcut icon" href="/favicon.svg"/>
                </Head>
                <Component {...pageProps} />
            </MantineProvider>
        </>
    );
}
