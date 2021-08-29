// const http = require('http'); 
import http from 'http';
import fs from 'fs';
import path from 'path';
import { runInNewContext } from 'vm';

const serverPath = path.dirname(process.argv[1]);
const homeworks = JSON.parse(fs.readFileSync(path.join(serverPath, 'static', 'homeworks.json'), 'utf-8'));
const PORT = 5000;

const server = http.createServer((req, res) => {
    const [, , homeworkId] = [...req.url.split('/')];
    const filteredHomework = homeworks.filter(homework => homework._id === homeworkId);
    if (req.url === '/homework' || req.url === '/homework/' || req.url === `/homework/${homeworkId}`) {
        res.write(` 
    <!DOCTYPE html> 
    <html lang="en"> 
    <head> 
    <meta charset="UTF-8"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Document</title> 
    <link rel="stylesheet" href="/styles/style.css" />
    </head> 
    <body> 
    <ol> 
    `);
        if (req.url === `/homework/${homeworkId}` && homeworkId > '') {
            filteredHomework.forEach(homework => {
                res.write(`<h1> ${homework.title}</h1> `);
                res.write(`<p> ${homework.description}</p> `);
            });
        } else {
            homeworks.forEach(homework => {
                res.write(`<a href='`); res.write(`/homework/${homework._id}'><li> ${homework.title}</li></a> `);
            });
        }
        res.write(` 
                </ol > 
            </body > 
        </html >
    `);
        res.end();
    } else {
        const indexPath = path.join(serverPath, 'static', req.url);
        fs.readFile(indexPath, (err, htmlContent) => {
            if (err) {
                res.statusCode = 400;
                res.end();
            }
            res.end(htmlContent);
        });
    }
});
server.listen(PORT, () => {
    console.log('Server is running ' + PORT);
});