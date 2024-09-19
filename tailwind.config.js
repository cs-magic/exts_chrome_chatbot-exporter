const tailwindConfig = require("../../tailwind.config.js");

// auto switch dark mode, ref: https://claude.ai/chat/1783587f-2142-439f-b02a-524506af5002
tailwindConfig.darkMode = "media";
tailwindConfig.content.push("./src/**/*");

module.exports = tailwindConfig;
