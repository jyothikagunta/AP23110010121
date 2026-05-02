const axios = require("axios");

const log = async (stack, level, pkg, message) => {
    try {
        console.log(`[LOG] ${stack} | ${level} | ${pkg} | ${message}`);

        await axios.post(
            "http://20.28.77.122:3000/evaluation-service/logs",
            {
                stack,
                level,
                package: pkg,
                message
            },
            {
                timeout: 3000
            }
        );

    } catch (err) {
        console.error("Logging failed:", err.message);
    }
};

module.exports = log;