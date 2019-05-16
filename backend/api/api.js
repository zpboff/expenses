const express = require('express');
const apiRouter = express.Router();

apiRouter.get("/get", (req, res) => {
   return res.json({ success: true });
});

apiRouter.post("/update", (req, res) => {
   return res.json({ success: true });
});

module.exports = apiRouter;