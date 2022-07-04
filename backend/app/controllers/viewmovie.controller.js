viewMovieController = {
    view :async (request,response)=>{
    
        //console.log(request.body);
    
       return await response.send("Routing works");
    },
    viewOne :async (request,response)=>{
    
        //console.log(request.body);
    
       return await response.send(`This is for view ${request.params.id}`);
    }
}
module.exports= viewMovieController;