const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');

    // Menanggapi respons dari client
    const { method, url } = request;



    if (url === '/') {

        if (method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah homepage'
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: 'Halaman tidak dapat di akses'
            }));
        }

    } else if (url === '/about') {

        if (method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah halaman about'
            }));
        } else if (method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                // Di sinilah kita mengubah variabel body yang sebelumnya menampung buffer menjadi data sebenarnya dalam bentuk string melalui perintah Buffer.concat(body).toString().
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Halo ${name}! Ini adalah halaman about`
                }));
            })
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `<h1>Halaman tidak dapat di akses menggunakan ${method} request!</h1>`
            }));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: '<h1>Halaman tidak ditemukan</h1>'
        }));
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan di http://${host}:${port}`);
});