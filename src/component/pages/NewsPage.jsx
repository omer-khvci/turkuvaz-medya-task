import { Box, Button, Card, CardActionArea, CardMedia, Container, Divider, Grid, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NewsService from "../../../services/get-news";
import NewsItem from "../NewsItem";
import NewsIMainItem from "../NewsIMainItem";
import { Player } from "video-react";

const NewsPage = () => {
    const [data, setData] = useState([]);
    const [getVideo, setVideo] = useState([]);
    const [date, setDate] = useState(null);
    const [isUseEffectCall, setIsUseEffectCall] = useState(false);


    useEffect(() => {
        if (isUseEffectCall) return
        setIsUseEffectCall(true);
        getNews();
        getVideos();

    }, [])

    const getNews = async () => {
        const response = await NewsService.GetNews();
        setData(response)
    }

    const getVideos = async () => {
        const response = await NewsService.GetVideoNews();
        setVideo(response);
        let text = response[0]?.OutputDate;

        const myArray = text?.split(" ");
        setDate({ date: myArray[1], hour: myArray[2] });
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
                            <NewsItem heightImg={'100px'} src={data[4 + item]?.primaryImage} title={data[4 + item]?.TitleShort} href={data[4 + item]?.Url} />
                        </Grid>
                    ))
                }


            </Grid>

            <Divider sx={{ my: 5 }} />

            <Grid container spacing={5}>
                {
                    [1, 2, 3].map((item) => (
                        <Grid item xs={12} key={item}>

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
            <Divider sx={{ my: 5 }} />
            <Box>
                <Player playsInline poster={getVideo[0]?.primaryImage} src={getVideo[0]?.VideoUrl} />
            </Box>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Typography variant="h4">{getVideo[0]?.TitleShort}</Typography>
                    <Typography component="p">{getVideo[0]?.Spot}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ textAlign: "end" }}>{date?.date}</Typography>
                    <Typography sx={{ textAlign: "end" }}>{date?.hour}</Typography>
                </Grid>
            </Grid>
            <Divider sx={{ my: 5 }} />
            <Grid container spacing={4}>
                {
                    [1, 2, 3, 4,5,6,7,8].map((item) => (
                        <Grid item xs={12} md={3} key={item} sx={{}}>
                            <Card>
                                <CardActionArea href={data[item]?.Url} sx={{}}>
                                    <CardMedia
                                        component="img"
                                        image={data[item]?.primaryImage}
                                        alt={data[item]?.TitleShort}
                                        height="100px"
                                        width="100%"
                                        sx={{
                                            objectFit: "contain"
                                        }}
                                    />
                                </CardActionArea>
                            </Card >

                        </Grid>
                    ))
                }
            </Grid>
            <Divider sx={{ my: 5 }} />
        </Container>
    )
}
export default NewsPage;