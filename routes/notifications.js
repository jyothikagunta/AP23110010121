const express = require("express");
const router = express.Router();
const log = require("../../logging_middleware/logger");

// dummy data
let notifications = [
    { id: "1", message: "Microsoft Hiring", priority: 8 },
    { id: "2", message: "Exam Tomorrow", priority: 10 },
    { id: "3", message: "Holiday Notice", priority: 5 }
];

router.get("/", async (req, res) => {
    await log("backend", "info", "route", "Fetching notifications");

    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 2;

        const sorted = notifications.sort((a, b) => b.priority - a.priority);

        const start = (page - 1) * limit;
        const end = start + limit;

        const result = sorted.slice(start, end);

        await log("backend", "info", "controller", "Notifications fetched successfully");

        res.json({ notifications: result });

    } catch (err) {
        await log("backend", "error", "controller", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;