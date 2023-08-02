import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

function NewsIMainItem({ src, title, href, heightImg }) {
    return (
        <Card sx={{


        }}>
            <CardActionArea href={href} sx={{}}>
                <CardMedia
                    component="img"
                    image={src}
                    alt=""
                    height={heightImg}
                    width="100%"
                    sx={{
                        objectFit: "contain"
                    }}

                />
                <CardContent>
                    <Typography gutterBottom variant="h3" sx={{ textAlign: "center" }}>
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default NewsIMainItem;
