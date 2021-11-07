module.exports = {
   scripts: {
      format: 'prettier --write "{src,apps,libs,test}/**/*.{js,jsx,ts,tsx}"',
      lint: 'eslint "{src,apps,libs,test}/**/*.{js,jsx,ts,tsx}" --fix',
   },
};
