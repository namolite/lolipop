const debug = (function () {
  let timestamp = function () { };
  timestamp.toString = () => `[${(new Date).toLocaleTimeString()}]`
  return {
    log: console.log.bind(console, '%s', timestamp),
    error: console.error.bind(console, '%s', timestamp)
  }
})()

export default debug