

var vm = require('vm');
var fs = require('fs');

function print(str) {
   console.log(str);
}
    var ea = require("fs"),
        fa = require("path");
var s; s = GLOBAL;
GLOBAL.print = print;
GLOBAL.read = function(a, b) {
        var a = fa.normalize(a),
            c = ea.readFileSync(a);
        !c && a != fa.resolve(a) && (a = path.join(__dirname, "..", "src", a), c = ea.readFileSync(a));
        c && !b && (c = c.toString());
        return c
    };

function load(filename) {
   
   vm.runInThisContext(fs.readFileSync(filename,'utf8'),filename);
}

var base_dir = __dirname + "/octane/";

load(base_dir + 'base.js');
load(base_dir + 'richards.js');
load(base_dir + 'deltablue.js');
load(base_dir + 'crypto.js');
load(base_dir + 'raytrace.js');
load(base_dir + 'earley-boyer.js');
load(base_dir + 'regexp.js');
load(base_dir + 'splay.js');
load(base_dir + 'navier-stokes.js');
load(base_dir + 'pdfjs.js');
load(base_dir + 'mandreel.js');
load(base_dir + 'gbemu-part1.js');
load(base_dir + 'gbemu-part2.js');
load(base_dir + 'code-load.js');
load(base_dir + 'box2d.js');
load(base_dir + 'zlib.js');
load(base_dir + 'zlib-data.js');
load(base_dir + 'typescript.js');
load(base_dir + 'typescript-input.js');
load(base_dir + 'typescript-compiler.js');



var success = true;
function PrintResult(name, result) {
  print( (name+ "                      ").substr(0,20) + ': ' + result);
}


function PrintError(name, error) {
  PrintResult(name, error);
  success = false;
}


function PrintScore(score) {
  if (success) {
    print('----');
    print('Score (version ' + BenchmarkSuite.version + '): ' + score);
  }
}


BenchmarkSuite.config.doWarmup = undefined;
BenchmarkSuite.config.doDeterministic = undefined;

function run() {
 console.log(" node version :", process.version);
 console.log(" arch         :", process.arch);
 console.log("");
 BenchmarkSuite.RunSuites({
     NotifyResult: PrintResult,
     NotifyError:   PrintError, 
     NotifyScore: PrintScore
 });
 
 console.log(" duration " , process.uptime() , " seconds");
}

module.exports = {
  suites: BenchmarkSuite.suites,
  run: run
};
