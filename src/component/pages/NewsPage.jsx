import { useEffect, useState } from "react";
import NewsService from "../../../services/get-news";
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

const NewsPage = () => {
    const [data, setData] = useState([])
    const [isUseEffectCall, setIsUseEffectCall] = useState(false)
    const uris = data[1]?.Url;
    useEffect(() => {
        if (isUseEffectCall) return
        setIsUseEffectCall(true)
        getNews()

    }, [])

    const getNews = async () => {
        const response = await NewsService.GetNews();
        setData(response)
    }

    const handleCardClick = (index) => {
        window.open(`${data[index]?.Url}`, "_blank");
    }


    return (



        <Grid container spacing={4} sx={{
        
        }}>
            <Grid item xs={6} sx={{
                
            }}>
                <Card sx={{
                    width: 500,
                    margin:"auto"

                }}>
                    <CardActionArea onClick={handleCardClick}>
                        <CardMedia
                            component="img"
                            image={data[0]?.primaryImage}
                            alt=""
                            height="300"
                            sx={{
                                objectFit: "contain"
                            }}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h2" sx={{ textAlign: "center" }}>
                                {data[0]?.TitleShort}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{textAlign:"center"}}>

                        <Button href={data[1]?.Url} target="_blank">
                        <img src={data[1]?.secondaryImage} />
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{textAlign:"center"}}>
                    <Button href={data[3]?.Url} target="_blank">
                        <img src={data[3]?.secondaryImage} />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}
export default NewsPage;