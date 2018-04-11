const pipe = (...args) =>
  args.length > 0 && args.reduce(
    (result, value) => isFunction(value) ? value(result) : value
  )

export default pipe
module.exports = pipe


const isFunction = f =>
  typeof f === "function"
