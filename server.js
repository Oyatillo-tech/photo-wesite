const express = require("express");
const app = express();
const pool = require("./config/db");
const cors = require("cors");

// Get controllers
const { getPhotos, deletePhotos2, postPhoto } = require("./controllers/photoController");
const { likePhotos } = require("./controllers/likeController");
const userRouter = require("./routes/userRoutes");
const photoRouter = require("./routes/photoRoute");
const likeRouter = require("./routes/likeRoute");

// Midlewere
app.use(express.json());
app.use(cors());


app.use("/user", userRouter);
app.use("/photos", photoRouter);

// like API
app.post('/like', likeRouter);

const port = 4000;
app.listen(port, () => {
  console.log(`Server ${port}-portda ishladi`);
});