module.exports = {
  environments: ["node"],
  excludes: ["./dist/**", "**/**.test.js"],
  namedExports: {
    reselect: ["createSelector"],
    enzyme: ["mount", "shallow"],
    react: ["useState", "useRef", "useEffect", "useLayoutEffect"],
    "react-dom": ["renderToString"],
    lodash: ["get", "isEqual", "isEmpty", "every", "kebabCase"],
    "react-router-dom": ["Redirect"]
  }
}
