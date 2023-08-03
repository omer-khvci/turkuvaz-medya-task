
import NewsPage from "@/component/pages/NewsPage";
import { Box, ThemeProvider } from '@mui/material';
import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import Head from "next/head";
import "node_modules/video-react/dist/video-react.css";

const theme = unstable_createMuiStrictModeTheme();

const App = (props) => {
    return (
        <>
            <Head>
                <title>{`Turkuvaz Medya Task`}</title>
                <meta name='viewport' content='initial-scale=1, width=device-width' />
                <meta name="description" content="Turkuvaz Medya"></meta>
                <meta name="keywords" content="Ahaber,Atv,ATV,Takvim,Aspor,Sabah,Apara"></meta>
                <meta name="keywords" content="Turkuvaz Medya Grubu, Turkuvaz, Medya, Grubu, haber, kanal, atv, a haber, a spor, radyo, akademi, görsel medya, yazılı medya, işitsel medya, dağıtım, perakende, abone, matbaa, gazete, sabah, takvim, fotomaç, dergi, minika, kitap, etkinlik, reklam"></meta>
                <link rel="shortcut icon" href="https://i.tmgrup.com.tr/tmg/turkuvazmedyagrubu/assets/favicon.ico"></link>
                <meta name="twitter:card" content="summary"></meta>
                <meta name="twitter:title" content="Turkuvaz Medya Grubu"></meta>
                <meta name="twitter:description" content="Her şey Duyulsun, Görülsün, Bilinsin diye buradayız !"></meta>
                <meta name="twitter:image:src" content="https://i.tmgrup.com.tr/tmg/turkuvazmedyagrubu/assets/img/logo_light.png"></meta>
            </Head>
            <Box>

                    <ThemeProvider theme={theme}>

                      <NewsPage />
                        
                    </ThemeProvider>
            </Box>


        </>
    )
}


export default App