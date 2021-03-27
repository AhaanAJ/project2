const app = require('express')()
const morgan = require('morgan')
const hbs = require('express-handlebars');
const path = require('path')
const PORT = process.env.PORT || 5001;




// middleware for logger
app.use(require('express').urlencoded({extended:false}));
app.use(morgan('dev'))


// init hbs
app.engine('hbs', hbs({extname:'hbs', defaultLayout:'layouts', layoutsDir:__dirname + '/views/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
    res.redirect('/sale')
})

app.get('/sale',(req,res)=>{
    res.render('sale',{
        title : 'Sale'
    })
})


app.get('/bill',(req,res)=>{
    res.render('bill',{
        title : 'Bill'
    })
})



app.get('/delivery',(req,res)=>{
    res.render('delivery',{
        title : 'Delivery'
    })
})


app.get('/return',(req,res)=>{
    res.render('return',{
        title : 'Return'
    })
})


app.listen(PORT,()=>{
    console.log(`Server Runing on Port:${PORT}`)
})
