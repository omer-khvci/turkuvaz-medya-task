import { useEffect, useState } from "react";
import NewsService from "../../../services/get-news";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

const NewsPage = () =>{
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

    


    return(
      
       <Box>
        
        <Card sx={{ maxWidth: 345,
        marginLeft:"20px",
        marginTop:"25px" 
        
        }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={data[0]?.primaryImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
       </Box>
    )
}
export default NewsPage;