const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')
const spotifyWebApi = require('spotify-web-api-node');

dotenv.config();

const app = express();
app.use(express.json())
app.use(cors())

const redirect_uri = process.env.NODE_ENV === 'production' ? 'https://explorify-music.netlify.app' : 'http://localhost:3000'

app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new spotifyWebApi({
        redirectUri:redirect_uri,
        clientId:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET,
        refreshToken,
    })
    spotifyApi
      .refreshAccessToken()
      .then(data => {
        res.json({
          accessToken: data.body.access_token,
          expiresIn: data.body.expires_in,
        })
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(400)
      })
  })


app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyAPI = new spotifyWebApi({
        redirectUri:redirect_uri,
        clientId:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET,
    })
    spotifyAPI.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken:data.body.access_token,
            refreshToken:data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})

const port = process.env.PORT || 5000

app.get('/', (req, res) => { 
  res.send('Backend server running')
})


app.listen(port, () => {
    console.log('Listening on port 5000')
})