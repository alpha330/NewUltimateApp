module.exports = {
  presets: [
    ["@babel/preset-env"],
    ["@babel/preset-react", { runtime: "automatic" }] // 👈 این خط مهمه!
  ]
};
