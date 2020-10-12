import path from 'path';
import fs from 'fs';
import React from 'react';
import express from 'express';
import axios from 'axios';
import { StaticRouter } from 'react-router';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/', (request, response) => {
  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      return response.status(500).send('Unable to load index.html!');
    }
    axios.get(`https://api.spacexdata.com/v3/launches?limit=10`)
      .then(res => {
        const app = ReactDOMServer.renderToString(<StaticRouter location={request.url} context={{}}><App initialData={res.data}/></StaticRouter>);
             return response.send(
            data.replace('<div id="root"></div>',`<div id="root">${app}</div>`)
          );
      })
      .catch(function (error) {
        console.log("api error==", error);
        response.send('Data not Loaded');
      });
  });
});

app.use(express.static('./build'));
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
