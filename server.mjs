import path from 'path'
import express from 'express';

const app = express()
const port = process.env.PORT || 3000


const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './website/build')));

app.get('/abc', (req, res) => {
    console.log("request ip: ", req.ip);
  res.send('Hello World! ' + new Date().toString());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})