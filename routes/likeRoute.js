const { likePhotos } = require("../controllers/likeController");

const express = require("express");
const likeRouter = express.Router();

likeRouter.post('./like', likePhotos);

module.exports = likeRouter;