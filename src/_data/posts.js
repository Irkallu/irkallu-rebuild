const { default: axios } = require('axios');

module.exports = async () => {
  try {
    const res = await axios.get('https://api.buttercms.com/v2/posts/?auth_token=e1cc62f237d47c561e7af1feef05773c33b41441');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

/* var butter = require('buttercms')("e1cc62f237d47c561e7af1feef05773c33b41441");

butter.post.list({
  "page": 1,
  "page_size": 10,
  "exclude_body": true,
})
.then(function(resp) {
 console.log(resp.data)
}).catch(function(resp) {
 console.log(resp)
});

*/

/* const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  let url = "https://api.buttercms.com/v2/posts/?auth_token=e1cc62f237d47c561e7af1feef05773c33b41441";

  ///This returns a promise
  return EleventyFetch(url, {
    duration: "1d", // save for 1 day
    type: "json"    // we’ll parse JSON for you
  });
}; */

