var csg = require('csg')
var test = require('tape')

var rotate = require('./')

test('rotate a cube', function (t) {
  var cube = csg.cube()
  t.deepEqual(
    rotate(
      rotate(
        cube,
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1 }
      ),
      { x: 0, y: 0, z: 0 },
      { x: -1, y: -1, z: -1 }
    ),
    cube
  )
  t.end()
})
