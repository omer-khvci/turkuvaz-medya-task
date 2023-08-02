import { Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NewsService from "../../../services/get-news";
import NewsC4Item from "../NewsC4Item";
import NewsIMainItem from "../NewsIMainItem";

const NewsPage = () => {
    const [data, setData] = useState([])
    const [isUseEffectCall, setIsUseEffectCall] = useState(false)


    useEffect(() => {
        if (isUseEffectCall) return
        setIsUseEffectCall(true)
        getNews()

    }, [])

    const getNews = async () => {
        const response = await NewsService.GetNews();
        setData(response)
    }




    return (


        <Container>
            <Grid container spacing={4} sx={{ mb: 5 }} alignItems={'center'}>
                <Grid item xs={6} sx={{}}>
                    <NewsIMainItem heightImg={'300px'} src={data[0]?.primaryImage} title={data[0]?.TitleShort} href={data[0]?.Url} />
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{ textAlign: "center" }}>

                            <Button href={data[1]?.Url} target="_blank">
                                <img src={data[1]?.secondaryImage} />
                            </Button>
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: "center" }}>
                            <Button href={data[3]?.Url} target="_blank">
                                <img src={data[3]?.secondaryImage} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container spacing={4}>
                {
                    [1, 2, 3, 4].map((item) => (
                        <Grid item xs={12} md={3} key={item} sx={{}}>
                            <NewsC4Item heightImg={'100px'} src={data[4 + item]?.primaryImage} title={data[4 + item]?.TitleShort} href={data[4 + item]?.Url} />
                        </Grid>
                    ))
                }


            </Grid>

            <Divider sx={{ my: 5 }} />

            <Grid container spacing={5}>

                {
                    [1, 2, 3].map((item) => (
                        <Grid item xs={4} key={item}>

                            <Typography variant="h5">
                                {data[8 + item]?.Title}
                            </Typography>
                            <Typography component="p">
                                {data[8 + item]?.Spot}
                            </Typography>

                        </Grid>
                    ))
                }




            </Grid>
        </Container>
    )
}
export default NewsPage;