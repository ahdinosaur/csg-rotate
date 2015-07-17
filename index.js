var csg = require('csg')
var rotateByDir = {
  x: require('gl-vec3/rotateX'),
  y: require('gl-vec3/rotateY'),
  z: require('gl-vec3/rotateZ')
}
var createVec = require('gl-vec3/create')
var mapValues = require('lodash.mapvalues')

module.exports = rotate

// TODO rotate normals

var indexByDirs = {
  x: 0,
  y: 1,
  z: 2
}

function rotate (solid, origin, rotation) {
  return csg.fromPolygons(
    solid.toPolygons().map(function (polygon) {
      return new csg.Polygon(
        polygon.vertices.map(function (vertex) {
          return new csg.Vertex(
            rotatePoint(vertex.pos, origin, rotation),
            vertex.normal
          )
        }),
        polygon.shared
      )
    })
  )
}

function rotatePoint (point, origin, rotation) {
  //console.log("rotate", JSON.stringify(point, null, 2), origin, rotation)
  var pointVec = createVec()
  ;['x', 'y', 'z'].forEach(function (dir, i) {
    pointVec[indexByDirs[dir]] = point[dir]
  })
  var originVec = [origin.x, origin.y, origin.z]
  var rotationVec = [rotation.x, rotation.y, rotation.z]

  //console.log("originVec", originVec)
  //console.log("rotationVec", rotationVec)

  ;['x', 'y', 'z'].forEach(function (dir, i) {
    console.log("pointVec", dir, pointVec)
    var tmpVec = createVec()
    rotateByDir[dir](tmpVec, pointVec, originVec, rotationVec)
    pointVec[indexByDirs[dir]] = tmpVec[indexByDirs[dir]]
  })

  var retVec = [].slice.call(pointVec)
  //console.log("vec", retVec)
  
  return retVec
}
