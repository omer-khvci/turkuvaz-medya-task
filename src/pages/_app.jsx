
import NewsPage from "@/component/pages/NewsPage";
import { AuthProvider } from "@/context/AuthContext";
import { Box, ThemeProvider } from '@mui/material';
import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import Head from "next/head";

const theme = unstable_createMuiStrictModeTheme();

const App = (props) => {
    const { Component, pageProps } = props

   // const getLayout = Component.Layout ?? (page => <NewsLayout >{page}</NewsLayout>)

   


    return (
        <>
            <Head>
                <title>{`ŞikayetVar Task`}</title>
                <meta name='viewport' content='initial-scale=1, width=device-width' />
            </Head>
            <Box>
                <AuthProvider>
                    <ThemeProvider theme={theme}>

                      <NewsPage />
                        
                    </ThemeProvider>
                </AuthProvider>
            </Box>


        </>
    )
}


export default App