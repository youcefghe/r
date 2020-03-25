const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // res.send('<h1>hello from dj</h1>') or the html file directly
  // res.sendStatus(401);
  res.status(200).json({ seccess: true, data: 'showing the bootcamps' });
});

router.post('/', (req, res) => {
  res.status(200).json({ seccess: true, data: 'adding new bootcamp' });
});

router.get('/:id', (req, res) => {
  res.status(200).json({
    seccess: true,
    data: `getting the bootcamp : ${req.params.id}`
  });
});

router.put('/:id', (req, res) => {
  res.status(200).json({
    seccess: true,
    data: `editing a bootcamp : ${req.params.id}`
  });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({
    seccess: true,
    data: `deleting a bootcamp : ${req.params.id}`
  });
});

module.exports = router;
