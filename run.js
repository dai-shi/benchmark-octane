var benchmark = require('benchmark');
var octane = require('./lib/octane.js');

var suite = new benchmark.Suite();

for (var i = 0; i < octane.length; i++) {
  suite.push(new benchmark(octane[i]));
}

suite.on('cycle', function(event) {
  console.log(String(event.target));
})
  .run({
  async: false
});
