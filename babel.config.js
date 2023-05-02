module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    // "react-native-reanimated/plugin",
    [
      "babel-plugin-module-resolver",
      {
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@constants": "./src/constants",
          "@models": "./src/models",
          "@navigation": "./src/navigation",
          "@screens": "./src/screen",
          "@services": "./src/services",
          "@store": "./src/store",
          "^react-native$": "react-native-web",
        },
      },
    ],
  ],
};
