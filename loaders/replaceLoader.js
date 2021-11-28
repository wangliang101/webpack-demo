module.exports = function(source) {
  const result = source.replace('webpack', 'my webpack');
  this.callback(null, result);
}
