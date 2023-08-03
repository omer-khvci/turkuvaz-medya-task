const ApiUrl = process.env.NEXT_PUBLIC_API_URL;

const NewsService ={
    GetNews : async () =>{
        const url = `${ApiUrl}/352`
        const request = await fetch(url)
        const response = await request.json();
        if(response.meta.status_code == 200)
        return response.data.articles.Response;
        return false;
    },
    
    GetVideoNews : async () =>{
        const url = `${ApiUrl}/424`;
        const request = await fetch(url)
        const response = await request.json();
        if(response.meta.status_code == 200)
        return response.data.videos.Response;
        return false;
    }
}

export default NewsService;
