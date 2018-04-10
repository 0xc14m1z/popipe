const pipe = (...args) =>
  args.reduce(
    (result, value) => isFunction(value) ? value(result) : value,
    undefined
  )

export default pipe
module.exports = pipe


const isFunction = f =>
  typeof f === "function"
