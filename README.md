# Hello, Next.js, Express.js and TypeScript!

This is a simple project created to be a start point for projects using [Next.js](https://www.npmjs.com/package/next), [Express.js](https://www.npmjs.com/package/express) and [TypeScript](https://www.npmjs.com/package/typescript).

All necessary configurations to provide a nice development environment using [nodemon](https://www.npmjs.com/package/nodemon) and [ts-node](https://www.npmjs.com/package/ts-node) is already done.

This project is built with little modifications from the [learn project](https://nextjs.org/learn/) from the Next.js website as of January 7th, 2019.

## What's inside

Inside the server folder structure is all the server setup code and a hint of nice a way to insert new routes through the given sample.

Next.js and Express.js configurations are separated in the *./server/next.config.ts* and *./server/express.config.ts* respectively, it is suggested to sustain this structure to set up any middleware within the express file and so on.

The remaining folder structure is in accordance with the defaults suggested by [React](https://www.npmjs.com/package/react) and Next.js, where the shared components are stored in the ./components folder and the pages on the *./pages* folder.

As an extra, there is the interfaces folder just for holding those pretty TS only things that get discarded on compile time that we all know and love :)

## Running

To run this project in develpment, install all the dependencies with

```
npm install
```

And then, run the *dev* script from the *package.json* with:

```
npm run dev
```

## Deploying

To run this project in a production environment, run the following commands:

```
npm install
npm run build
npm start
```
