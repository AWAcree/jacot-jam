module.exports = function (eleventyConfig) {
  // Input directory: src
  // Output directory: _site
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js/");

  return {
    dir: {
      input: "dist",
      output: "_site",
    },
  };
};
