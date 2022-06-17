const http=require('http');
const server=http.createServer((req,res)=>{

    if(req.url==='/'){
        res.end("<h1>welcome to out home page</h1>");
    }
    if(req.url==='/about'){
        res.end("<h1>welcome to out about page</h1>");
    }
  
    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">go back</a>
    `)
  


})

server.listen(5000)