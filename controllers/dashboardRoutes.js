const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// render (get) all workout w/ comments (not user specific)
//  http://localhost:3001/dashboard/
router.get('/', async (req, res) => {
    try {
        // Get all workouts and JOIN with user data
        const blogData = await Blog.findAll({
            attributes: ['id', 'title', 'blog_text', 'date_created', 'user_id'],
            include: [
                {
                    model: Comment,
                    attributes: [
                        'id',
                        'title',
                        'comment',
                        'workout_id',
                        'user_id',
                        'created_at'
                    ],
                    include: {
                        model: User,
                        attributes: ['name'],
                    },
                },
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        // Serialize data so the template can read it
        const blogs = blogData.map((allBlogs) => allBlogs.get({ plain: true }));
        // Pass serialized data and session flag into template
        res.render('dashboard', {
            workouts,
            logged_in: req.session.logged_in,
            username: req.session.name,
        });
    } catch (err) {
        res.status(500).json(err.message);
    }
});

//  http://localhost:3001/dashboard/new
router.get('/new', async (req, res) => {
        res.render('add-workout', {
            logged_in: req.session.logged_in,
            username: req.session.name,
        });
});

module.exports = router;