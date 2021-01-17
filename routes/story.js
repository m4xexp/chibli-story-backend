const router = require('express').Router();
let Story = require('../models/story.models');

router.route('/').get((req,res) => {
    Story.find()
    .then(stories => res.json(stories))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
 
    const title = req.body.title;
    const thumbnailUrl = req.body.thumbnailUrl;
    const story = req.body.story;
    const date = Date.parse(req.body.date);

    const newStory = new Story({
        title,
        thumbnailUrl,
        story,
        date
    });

    newStory.save()
    .then(() => res.json('Story Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
    
});

module.exports = router;