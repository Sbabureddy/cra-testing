module.exports = {
    "collectCoverageFrom": [
        "src/**/*.{js,jsx}",
        "!<rootDir>/node_modules/",
      ],
      "coverageThreshold": {
        "global": {
          "branches": 80,
          "functions": 80,
          "lines": 80,
          "statements": 80
        }
      },
      "coverageReporters": ["text"],
}