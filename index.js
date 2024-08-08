const express = require('express');
require('dotenv').config();

const app = express()
const port = 4064
const githubData = {
    login: "adilshaikh4064",
    id: 106678504,
    node_id: "U_kgDOBlvI6A",
    avatar_url: "https://avatars.githubusercontent.com/u/106678504?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/adilshaikh4064",
    html_url: "https://github.com/adilshaikh4064",
    followers_url: "https://api.github.com/users/adilshaikh4064/followers",
    following_url:
        "https://api.github.com/users/adilshaikh4064/following{/other_user}",
    gists_url: "https://api.github.com/users/adilshaikh4064/gists{/gist_id}",
    starred_url:
        "https://api.github.com/users/adilshaikh4064/starred{/owner}{/repo}",
    subscriptions_url:
        "https://api.github.com/users/adilshaikh4064/subscriptions",
    organizations_url: "https://api.github.com/users/adilshaikh4064/orgs",
    repos_url: "https://api.github.com/users/adilshaikh4064/repos",
    events_url: "https://api.github.com/users/adilshaikh4064/events{/privacy}",
    received_events_url:
        "https://api.github.com/users/adilshaikh4064/received_events",
    type: "User",
    site_admin: false,
    name: "Adil Shaikh",
    company: null,
    blog: "",
    location: "Patna , India",
    email: null,
    hireable: null,
    bio: null,
    twitter_username: "adilshaikh4064",
    public_repos: 12,
    public_gists: 0,
    followers: 0,
    following: 4,
    created_at: "2022-06-01T13:19:58Z",
    updated_at: "2024-08-08T20:30:38Z",
};

app.get('/', (req, res) => {
    res.send('hello adil, i am listening now');
})
app.get('/twitter', (req, res) => {
    res.send('hello user, adildotcom');
})
app.get('/login', (req, res) => {
    res.send('<h1>log in to chai aur code here</h1>')
})
app.get('/youtube', (req, res) => {
    res.send('<h2>chai aur code </h2>')
})
app.get('/github', (req, res) => {
    res.json(githubData)
})


app.listen(process.env.PORT, () => {
    console.log(`example app listening on port ${process.env.PORT}`)
})