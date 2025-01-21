## NPM

npm ERR! Cannot read properties of null (reading 'matches')
=> This error shows up when you run npm install in a directory where you previously ran pnpm install. The solution is to remove your node_modules directory and run npm install again.

All "payload" packages must have the same version. This is an error with your set-up, not a bug in Payload.
=> Please go to your package.json and ensure all "payload" packages have the same version.

TypeError: Cannot destructure property 'config' of '(0 , \_chunk_3MXUY6XL_js**WEBPACK_IMPORTED_MODULE_10**.b)(...)' as it is undefined.
