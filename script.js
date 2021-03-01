mapboxgl.accessToken =
  'pk.eyJ1IjoidGFtdGgtZGV2IiwiYSI6ImNrbG5uOWlycTBrcTkybm13c2RxOTZkZzkifQ.xzEei4YocA4CGX-zV7ExFQ'

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
})

function successLocation(position) {
  const { longitude, latitude } = position.coords
  setupMap([longitude, latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center,
    zoom: 15,
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav, 'top-right')

  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  })

  map.addControl(directions, 'top-left')
}
