# csg-rotate

rotate a [csg.js](https://npmjs.org/csg) solid over an `{x, y, z }` origin by a `{ x, y, z }` vector.

## install

with [npm](https://npmjs.org), do:

```
npm i --save csg-rotate
```

## usage

```
var csg = require('csg')
var rotate = require('csg-rotate')

var cube = csg.cube({
  center: [0, 0, 0],
  radius: [1, 2, 3]
})
var rCube = rotate(
  // solid
  cube,
  // origin
  { x: 10, y: 10, z: 10 },
  // rotation
  { x: 90, y: 90, z: 90 }
)
console.log(JSON.stringify(rCube, null, 2))
```

## license

ISC
