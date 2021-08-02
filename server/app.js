const express = require('express');
const fs = require('fs'); 
const cors = require('cors'); 
const thumbsupply = require('thumbsupply');
const app = express(); 

const videos = [
    {
        id: 0,
        poster: '/video/0/poster',
        duration: '00.18 secs',
        name: 'SHIMLA, Indias most beautiiful Tourist Hill station in Himachal Pradesh.', 
       
        
    }, 
    {
        id: 4,
        poster: '/video/4/poster',
        duration: '00.25 secs',
        name: 'Monsoon | Into the Nature | Cinematic Short Video'
    },
    {
        id: 1,
        poster: '/video/1/poster',
        duration: '00.17 secs',
        name: 'Weathering With You anime short edit / Song: Circles by Post Malon'
    },
    {
        id: 2,
        poster: '/video/2/poster',
        duration: '00.31 secs',
        name: 'Beautiful peacock short video with a classic background music | Part of a documentary'
    }, 
    {
        id: 3,
        poster: '/video/3/poster',
        duration: '00.28 secs',
        name: 'Song : Hikarunara [Your Lie in April] - Indo version anime music | Use Headset/earphone for better sound.'
    },
];




app.get('/video/:id/data', function(req, res) {
    const id = parseInt(req.params.id, 10);
    res.json(videos[id]);
}); 

app.get('/video/:id', function(req, res) {
    const path = `assets/${req.params.id}.mp4`;
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;
    if (range) { 
        console.log('we have range', range);
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize-1;
        const chunksize = (end-start)+1;
        const file = fs.createReadStream(path, {start, end});
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else { 
        console.log('no range', range);
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);
    }
}); 

app.get('/video/:id/poster', function(req, res) {
    thumbsupply.generateThumbnail(`assets/${req.params.id}.mp4`)
    .then(thumb => res.sendFile(thumb)) 
    .catch(err => console.log(err))
}); 

app.get('/video/:id/caption', function(req, res) {
     res.sendFile('assets/captions/sample.vtt', { root: __dirname });
}); 

app.use(cors()); 

app.get('/videos', function(req, res) { 
    res.json(videos); 
});

app.listen(4000, function() {
    console.log('Listening on port 4000!')
});