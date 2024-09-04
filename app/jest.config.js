/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+.(tsx|ts)?$": ["ts-jest"],
  },
};
