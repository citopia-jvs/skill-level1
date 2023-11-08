module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["dotenv-import"],
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "^~(.+)": "./app/\\1",
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
};
