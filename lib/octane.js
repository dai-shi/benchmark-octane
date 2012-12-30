// Copyright 2012 Daishi Kato. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// A wrapper for Node.js module

var vm = require('vm');
var fs = require('fs');

vm.runInThisContext('var suites = []');

vm.runInThisContext('function Benchmark(name, run, setup, teardown) { this.name = name; this.run = run; this.setup = setup; this.teardown = teardown; }');

vm.runInThisContext('function BenchmarkSuite(name, reference, benchmarks) { for (var i = 0; i < benchmarks.length; i++) { var suite = { id: name + "." + benchmarks[i].name, fn: benchmarks[i].run }; if (benchmarks[i].setup) { suite.setup = benchmarks[i].setup; } if (benchmarks[i].teardown) { suite.teardown = benchmarks[i].teardown; } suites.push(suite); } }');

vm.runInThisContext('function alert(x) { console.log(x); }');

vm.runInThisContext(fs.readFileSync(__dirname + '/octane/richards.js', 'utf8'));
vm.runInThisContext(fs.readFileSync(__dirname + '/octane/deltablue.js', 'utf8'));
vm.runInThisContext(fs.readFileSync(__dirname + '/octane/crypto.js', 'utf8'));
vm.runInThisContext(fs.readFileSync(__dirname + '/octane/raytrace.js', 'utf8'));
vm.runInThisContext(fs.readFileSync(__dirname + '/octane/earley-boyer.js', 'utf8'));
vm.runInThisContext(fs.readFileSync(__dirname + '/octane/regexp.js', 'utf8'));
vm.runInThisContext(fs.readFileSync(__dirname + '/octane/splay.js', 'utf8'));
vm.runInThisContext(fs.readFileSync(__dirname + '/octane/navier-stokes.js', 'utf8'));
vm.runInThisContext(fs.readFileSync(__dirname + '/octane/pdfjs.js', 'utf8'));
vm.runInThisContext(fs.readFileSync(__dirname + '/octane/mandreel.js', 'utf8'));
vm.runInThisContext(fs.readFileSync(__dirname + '/octane/gbemu.js', 'utf8'));
vm.runInThisContext(fs.readFileSync(__dirname + '/octane/code-load.js', 'utf8'));
vm.runInThisContext(fs.readFileSync(__dirname + '/octane/box2d.js', 'utf8'));

module.exports = vm.runInThisContext('suites');
