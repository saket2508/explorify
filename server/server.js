const express = require('express');
const cors = require('cors')
const spotifyWebApi = require('spotify-web-api-node');


const app = express();
app.use(express.json())
app.use(cors())


app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new spotifyWebApi({
        redirectUri:'http://localhost:3000',
        clientId:'f03e3b87cf5e45a89bbf4552cc4f1205',
        clientSecret:'f5f6ae2d0b684a7d95ad4c0e83489cc4',
        refreshToken,
    })
    spotifyApi
      .refreshAccessToken()
      .then(data => {
        console.log(data.body.access_token)
        res.json({
          accessToken: data.body.accessToken,
          expiresIn: data.body.expiresIn,
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
        redirectUri:'http://localhost:3000',
        clientId:'f03e3b87cf5e45a89bbf4552cc4f1205',
        clientSecret:'f5f6ae2d0b684a7d95ad4c0e83489cc4'
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

const port = 5000


app.listen(port, () => {
    console.log('Listening on port 5000')
})