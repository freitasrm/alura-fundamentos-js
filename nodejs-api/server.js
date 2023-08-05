import app from './src/app.js'

// CRIANDO SERVER COM HTTP
// const http = require("http")
// const port = 3000;

// const rotas = {
//     '/': 'Curso de Node',
//     '/livros': 'Entrei na pag de Livros',
//     '/autores': 'Listagem de autores',
//     '/editora': 'Pag de editora',
//     '/sobre': 'Info sobre projeto'
// }

// const server = http.createServer((req, res) => {
    //     res.writeHead(200, { 'Content-Type': 'text/plain' });
    //     res.end(rotas[req.url]);
    // })
    
    // server.listen(port, () => {
        //     console.log(`Servidor escutando em http://localhost:${port}`)
        // })

// CRIANDO SERVER COM EXPRESS
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})