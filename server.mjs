import path from 'path'
import express from 'express';

const app = express()
const port = process.env.PORT || 3000

app.get('/abc', (req, res) => {
    console.log("request ip: ", req.ip);
  res.send('Hello World! ' + new Date().toString());
})

app.get('/getweather', (req, res) => {
    console.log("request ip: ", req.ip);
  res.send('Hello World! ' + new Date().toString());
})

app.get('/gettime', (req, res) => {
    console.log("request ip: ", req.ip);
  res.send('Hello World! ' + new Date().toString());
})

const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './website/build')));
app.get('*', express.static(path.join(__dirname, './website/build')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});