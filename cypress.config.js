const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'p1desy',
    e2e: {
        baseUrl: "https://demo.realworld.io/#/",
    },
});