const eleventySass = require("eleventy-sass");
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

module.exports = config => {
    config.addFilter('dateFilter', dateFilter);
    config.addFilter('w3DateFilter', w3DateFilter);

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

    /* Returns work items, sorted by display order
    config.addCollection('archives', collection => {
        return collection.getFilteredByGlob('./src/archives/*.md');
    }); */

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