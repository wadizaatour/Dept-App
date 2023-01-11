module.exports = {
    moduleFileExtensions: ["js", "ts", "json", "vue"],
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
    },
    testEnvironment: "jsdom",
    testEnvironmentOptions: {
      customExportConditions: ["node", "node-addons"],
   },
    transform: {
      "^.+\\.ts$": "ts-jest",
      "^.+\\.vue$": "@vue/vue3-jest",
    },
  };