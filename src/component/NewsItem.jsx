import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

function NewsItem({ src, title, href, heightImg }) {
    return (
        <Card sx={{
            height:"335px",
            overflow:"auto"

        }}>
            <CardActionArea href={href} sx={{}}>
                <CardMedia
                    component="img"
                    image={src}
                    alt={title}
                    height={heightImg}
                    width="100%"
                    sx={{
                        objectFit: "contain"
                    }}

                />
                <CardContent >
                    <Typography gutterBottom variant="h8" sx={{
                        textAlign: "center",
                        // whiteSpace: 'nowrap',
                        // overflow: 'hidden',
                        // textOverflow: 'ellipsis',
                        // width: '190px',
                        // display: 'inline-block',
                    }}>
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    )
}
export default NewsItem;
