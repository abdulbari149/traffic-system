module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "transform-inline-environment-variables",
      {
        include: ["NODE_ENV"],
      },
    ],
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "src/*": "./src/*",
          "@components": "./src/components/index",
          "@app/": "./src/app/",
          "cdn/": "./src/cdn/",
        },
        extensions: [
          ".ios.js",
          ".android.js",
          ".js",
          ".jsx",
          ".json",
          ".tsx",
          ".ts",
          ".native.js",
        ],
      },
    ],
  ],
};
