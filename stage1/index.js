const express = require('express');
const app = express();
const cors = require("cors");


app.get('/api', (req, res) => {
    const { slack_name, track } = req.query;
    const currentDate = new Date();
    const currentDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(currentDate);
    const currentTime = currentDate;
    const githubURL = {
        repo: "https://github.com/MideGiwa/hngx-backend",
        file: "https://github.com/MideGiwa/hngx-backend/blob/main/stage1/index.js"
    }

    if (!slack_name || !track) return res.status(400).json({ error: 'Missing parameter' });
    return res.status(200).json({
        slack_name: slack_name,
        current_day: currentDay,
        utc_time: currentTime.toISOString().slice(0, 19) + 'Z',
        track: track,
        github_file_url: githubURL.file,
        github_repo_url: githubURL.repo,
        status_code: 200,
    });
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);




