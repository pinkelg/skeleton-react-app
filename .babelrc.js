const isDevelopment = process.env.NODE_ENV !== "production";
module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        development: isDevelopment,
        runtime: "automatic"
      }
    ],
    [
      "@babel/preset-typescript",
      {
        isTSX: true,
        allExtensions: true
      }
    ],
    [
      "@babel/preset-env",
      {
        modules: false,
        // Allow importing core-js in entrypoint and use browserlist to select polyfills
        useBuiltIns: "entry",
        // Set the corejs version we are using to avoid warnings in console
        corejs: 3,
        // Exclude transforms that make all code slower
        exclude: ["transform-typeof-symbol"],
        loose: true,
        targets: {
          node: "current"
        }
      }
    ]
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: false,
        helpers: !isDevelopment,
        regenerator: !isDevelopment,
        useESModules: !isDevelopment
      }
    ]
  ],
  env: {
    production: {
      plugins: [
        [
          "babel-plugin-transform-react-remove-prop-types",
          {
            removeImport: true
          }
        ]
      ]
    }
  }
};
