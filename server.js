const express = require("express");
const app = express();

const notificationsRoute = require("../notification_app_be/routes/notifications");

app.use(express.json());

// routes
app.use("/notifications", notificationsRoute);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
