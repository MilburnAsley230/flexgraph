const getMaxValue = require('./getMaxValue')

module.exports = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }