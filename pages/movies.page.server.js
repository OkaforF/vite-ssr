// // /pages/movies.page.server.js
// // Environment: Node.js

// import fetch from "node-fetch";

// export { addPageContext }
// // Tell `vite-plugin-ssr` to make `pageContext.pageProps` available in the browser.
// // Make sure that `pageContext.pageProps` is serializable: `vite-plugin-ssr` will
// // serialize and pass `pageContext.pageProps` to the browser.
// export const passToClient = ['pageProps']

// async function addPageContext(pageContext) {
//   // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos")
//   let movies = await response.json()
//   console.log(movies)

//   // `movies` will be serialized and passed to the browser; we select only the data we
//   // need in order to minimize what is sent over the network.
//   movies = movies.map(({ title }) => ({ title }))

//   // We could also `return { movies }` but we use an object `pageProps` as convenience.
//   const pageProps = { movies }
//   return { pageProps }
// }

console.log('hello')

import { connect } from 'getstream';
console.log(connect)

const client = connect('xg5hdu6vtbww', '562tfun46whqbwhf6hp8u55h2j2gr56h44zren53325egjx4tpungs2xec8rcaey', { browser: false });
console.log(client)

const userToken = client.createUserToken('the-user-id');

console.log(userToken)

const ericFeed = client.feed('user', 'eric', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6IioiLCJhY3Rpb24iOiIqIiwiZmVlZF9pZCI6InVzZXJlcmljIn0.1grGjXkgJ9pUzxserTuXwl2dAVNNoOCUmnnuvY9jqu0');

// Add the activity to the feed
ericFeed.addActivity({
  actor: 'SU:eric',
  tweet: 'Hello world',
  verb: 'tweet',
  object: 1
});

// Let Jessica's flat feed follow Eric's feed
const jessicaFlatFeed = client.feed('timeline', 'jessica', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6IioiLCJhY3Rpb24iOiIqIiwiZmVlZF9pZCI6InRpbWVsaW5lamVzc2ljYSJ9.D1pJCD_Hb_jvlj41wUCKCCYbKGcCvXxp04NFHC5umWM');
jessicaFlatFeed.follow('user', 'eric');


