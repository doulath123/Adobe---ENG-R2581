const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.post('/', async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      bio: req.body.bio
    });
    await user.save();
    res.json({ user_id: user._id });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ error: 'Email already exists' });
    } else {
      res.status(400).json({ error: err.message });
    }
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        bio: user.bio,
        created_at: user.created_at,
        updated_at: user.updated_at
      });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      if (req.body.name) user.name = req.body.name;
      if (req.body.bio) user.bio = req.body.bio;
      user.updated_at = Date.now();
      await user.save();
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        bio: user.bio,
        created_at: user.created_at,
        updated_at: user.updated_at
      });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      await user.remove();
      res.json({ success: true });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message})
  }
});


module.exports = router ;