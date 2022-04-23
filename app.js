/* const express = require('express');
const app = express();

app.use( express.static('public'));



app.get('/' , (request , response, next) => {
    console.log(__dirname);
response.sendFile (__dirname + '/views/home.html');

})

app.get ('/about', ( request, response, next)=>{
    response.sendFile(__dirname + 'views/about.html');
})

app.get ('/works', ( request, response, next)=>{
    response.sendFile(__dirname + 'views/works.html');
})

app.listen(3000, () => console.log('listening in port 3000'))
 */
2
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {

    console.log(__dirname);
    response.sendFile(__dirname + '/views/home.html');
})

app.get('/about', (request, response, next) => {

    response.sendFile(__dirname + '/views/about.html');
})

app.get('/works', (request, response, next) => {

    response.sendFile(__dirname + '/views/works.html');
})

app.listen(3000, () => console.log('Listening in port 3000'));