import http from 'http';
import fs, { readFileSync } from 'fs';
import path from 'path';
import Mustache from 'mustache';
import queryString, { parse } from 'query-string';
import util from 'util';

const serverPath = path.dirname(process.argv[1]);
const homeworksTemplatePath = path.join(serverPath, 'template', 'homeworks.html');
const editHomeworksTemplatePath = path.join(serverPath, 'template', 'edit-homework.html');
const pathToHomeworkJSON = path.join(serverPath, 'static', 'homeworks.json');
const pathToHomeworkInfo = path.join(serverPath, 'template', 'homework-info.html');
const createHomeworkTemplatePath = path.join(serverPath, 'template', 'create-homework.html');

const homeworks = JSON.parse(fs.readFileSync(pathToHomeworkJSON, 'utf-8'));
homeworks.forEach(hw => {
    delete hw.results;
    delete hw.author;
});

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);



const PORT = 5000;

function str_rand() {
    let result = '';
    let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let max_position = words.length - 1;
    for (let i = 0; i < 23; ++i) {
        let position = Math.floor(Math.random() * max_position);
        result = result + words.substring(position, position + 1);
    }
    return result;
}


/**
 Create -- POST /homework
 Read   -- GET  /homework (/homework/:id)
 Update -- PUT  /homework/:id
 Delete -- DELETE /homework/:id
 ___
 CRUD
*/

// GET /homework
// GET /homework/:id
// POST /homework - create
// POST /homework/:id - update

const server = http.createServer(async (req, res) => {
    console.log(req.url);
    const homeworkId = req.url.split('/')[2];
    const homework = homeworks.find(hw => hw._id === homeworkId);
    if (/^\/homework\/?$/.test(req.url)) {
        let data = '';
        let updatedHomeworks = homeworks;
        console.log('Starting...');
        req.on('data', (chunk) => {
            console.log('Getting data...', chunk);
            data += chunk;
        });
        req.on('end', async () => {
            const parsed = queryString.parse(data);
            if (parsed.homeworkId) {
                updatedHomeworks = homeworks.filter(hw => hw._id !== parsed.homeworkId)
            }
            try {
                await writeFilePromise(pathToHomeworkJSON, JSON.stringify(updatedHomeworks))
                const template = await readFilePromise(homeworksTemplatePath, 'utf-8');
                const output = Mustache.render(template, { homeworks: updatedHomeworks });
                res.end(output);
            } catch (error) {
                res.statusCode = 400;
                res.end();
            }
        });

    } else if (/^\/homework\//.test(req.url) && homeworkId) {
        let template = await readFilePromise(pathToHomeworkInfo, 'utf-8');
        const output = Mustache.render(template, {
            title: homework.title,
            description: homework.description,
        });
        res.end(output);
    } else if (req.url.includes('.html') || req.url.includes('.css')) {
        try {
            const indexPath = path.join(serverPath, 'static', req.url);
            const fileContent = await readFilePromise(indexPath);

            console.log(`sending ${req.url} ${fileContent.length} bytes`);
            res.end(fileContent);
        } catch (err) {
            res.statusCode = 400;
            res.end(err);
        }
    } else if (req.url.startsWith('/edit-homework') && homeworkId) {
        console.log(req.method)
        console.log(req.read)
        if (req.method === 'POST') {
            let data = '';
            console.log('Starting...');
            req.on('data', (chunk) => {
                console.log('Getting data...', chunk);
                data += chunk;
            });
            req.on('end', async () => {
                console.log('Finished');
                console.log(data);
                const parsed = queryString.parse(data);
                if (parsed.title) {
                    homework.title = parsed.title;
                }
                try {
                    await writeFilePromise(pathToHomeworkJSON, JSON.stringify(homeworks))
                    const template = await readFilePromise(homeworksTemplatePath, 'utf-8');
                    const output = Mustache.render(template, { homeworks });
                    res.end(output);
                } catch (error) {
                    res.statusCode = 400;
                    res.end();
                }
            });
        }

        else {
            try {
                const template = await readFilePromise(editHomeworksTemplatePath, 'utf-8');
                const output = Mustache.render(template, {
                    title: homework.title,
                    _id: homework._id,
                });
                res.end(output);
            } catch (error) {
                res.statusCode = 400;
                res.end();
            }
        }

    } else if (req.url.startsWith('/create-homework/')) {
        if (req.method === 'POST') {
            let data = '';
            console.log('Starting...');
            req.on('data', (chunk) => {
                console.log('Getting data...', chunk);
                data += chunk;
            });
            req.on('end', async () => {
                console.log('Finished');
                const parsed = queryString.parse(data);
                parsed._id = str_rand();
                console.log(parsed);
                homeworks.push(parsed);
                await writeFilePromise(pathToHomeworkJSON, JSON.stringify(homeworks), 'utf-8', async (err) => {
                    if (err) {
                        console.log(err)
                        res.statusCode = 400;
                        res.end();
                    }
                    let template = await readFilePromise(createHomeworkTemplatePath, 'utf-8');
                    const output = Mustache.render(template, {});
                    res.end(output);
                });
            });
        } else {
            try {
                const template = await readFilePromise(createHomeworkTemplatePath, 'utf-8');
                const output = Mustache.render(template, {});
                res.end(output);
            } catch (error) {
                res.statusCode = 400;
                res.end();
            }
        }

    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log('Server is running ' + PORT);
});