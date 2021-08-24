const express = require('express');
const port = 8000;
const path = require('path');

const app = express();//app here hava all the functionalities of running express server

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded());//This is a middleware wherever we use app.use its a middleware
//Middle ware is a function which have access to your response and request
app.use(express.static('assets'));//this line will look for asset folder and its contained files















//Middleware prectice
app.use(function(req,res,next){
console.log('middleware called');
next();
});



//contact List will be array
var contactList = [{
    name : "Chandni",
    phone: "1010101010" 
},
{
    name: "shikzuka",
    phone: "11111111111"
}


]





//controllers
app.get('/',function(req,res){
    console.log(req);
    return res.render('home', { 
        title: "Contact List",
        contact_list : contactList
    });



  /* console.log(__dirname);
res.send('<h1>cool, it it running</h1>');*/
});
/*
app.get('/practice',function(req,res){
    return res.render('practice',{
        title:"Let us play ejs"
    });
});*/
//after LocalHost
app.post('/create-contact', function(req,res){
 /*contactList.push({
    name: req.body.name,
    phone: req.body.phone

 });*/
 contactList.push(req.body);
 return res.redirect('back');
})


app.get('/delete-contact/', function(req, res){
    console.log(req.query);
    let phone = req.query.phone

    let contactindex = contactList.findIndex(contact => contact.phone == phone);

    if(contactindex != -1){
        contactList.splice(contactindex, 1);
    }

    return res.redirect('back');
});

app.listen(port,function(err){
   
   if(err){
        console.log('Error in running the server',err);
    }
console.log("running on",port);
});