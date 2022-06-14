import {TshirtSizeFinder} from './TshirtSizeFinder.js';

function TshirtSizeTester(){
    console.assert(TshirtSizeFinder(37) === "S")
    console.assert(TshirtSizeFinder(40) === "M")
    console.assert(TshirtSizeFinder(43) === "L")
    console.assert(TshirtSizeFinder(38) === "S")
    console.assert(TshirtSizeFinder(42) === "M")
}

TshirtSizeTester();
