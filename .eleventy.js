const eleventySass = require("eleventy-sass");

module.exports = config => {
    config.addPlugin(eleventySass, {
        compileOptions: {
          cache: false,
          permalink: function(contents, inputPath) {
            return (data) => {
              return data.page.filePathStem.replace(/^\/scss\//, "/css/") + ".css";
            };
          }
        }
      });

    // Returns work items, sorted by display order
    config.addCollection('archives', collection => {
        return collection.getFilteredByGlob('./src/archives/*.md');
    });

    // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
    config.setUseGitIgnore(false);

    config.addPassthroughCopy("src/images");


    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
          input: 'src',
          output: 'dist'
        }
      };
  };