sendMovieController = {
    send :async (request,response)=>{
    
        //console.log(request.body);
    
       return await response.send("Routing works");
    },
    sendOne :async (request,response)=>{
    
        //console.log(request.body);
    
       return await response.send(`This is for sending ${request.params.id}`);
    }
}
module.exports= sendMovieController;