import path from 'path'
import express from 'express';
import cors from 'cors'

const app = express()
const port = process.env.PORT || 5004

app.use(cors())

app.get('/weather', (req, res) => {
  res.send({
    temp: 30,
    min: 20,
    max: 28,
    humidity: 72,
    name: "Karachi",
  });

  console.log("request ip: ", req.ip);
})

const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './website/build')));
app.use('*', express.static(path.join(__dirname, './website/build')));

// app.get('/abc', (req, res) => {
//   console.log("request ip: ", req.ip);
// res.send('Hello World! ');
// })

// app.get('/gettime', (req, res) => {
//     console.log("request ip: ", req.ip);
//   res.send(new Date().toString());
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});