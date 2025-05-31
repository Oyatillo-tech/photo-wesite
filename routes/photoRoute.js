const { getPhotos, postPhoto, deletePhotos } = require("../controllers/photoController");
const express = require("express");

const photoRouter = express.Router();
photoRouter.post('./add', getPhotos);
photoRouter.post('./all', postPhoto);
photoRouter.post('/delete', deletePhotos);

module.exports = photoRouter;

