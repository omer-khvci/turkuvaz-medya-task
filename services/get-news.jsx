const ApiUrl = process.env.NEXT_PUBLIC_API_URL;

const NewsService ={
    GetNews : async () =>{
        const url = `${ApiUrl}/352`
        const request = await fetch(url)
        const response = await request.json();
        
        return await response.data.articles.Response;
        
    },
    
    GetVideoNews : async () =>{
        const url = `${ApiUrl}/424`;
        const response = await fetch(url)
    
        return await response.json();
    }
}

export default NewsService;
