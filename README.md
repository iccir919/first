# @iccir919/first

[![npm (scoped)](https://img.shields.io/npm/v/@iccir919/first.svg)](https://www.npmjs.com/package/@iccir919/first)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@iccir919/first.svg)](https://www.npmjs.com/package/@iccir919/first)

Removes all spaces from a string.

## Install

```
$ npm install @iccir919/first
```

## Usage

```js
const tiny = require("@iccir919/first");

first("So much space!");
//=> "Somuchspace!"

first(1337);
//=> Uncaught TypeError: First wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
