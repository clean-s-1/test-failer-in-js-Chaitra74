import {calculate_color_map, print_color_map,format_color_map} from './ColorMapHandler.js';

function MisalignedColorPairTester(){
    var testcolormap = calculate_color_map();
    print_color_map(testcolormap);

    console.assert(testcolormap.length == 25);
    console.assert(testcolormap[0].pairIndex == 1);
    console.assert(format_color_map(testcolormap[6]) == " 7 |    Red | Orange");
    console.assert(format_color_map(testcolormap[0]) == " 1 |  White | Blue");
    console.assert(format_color_map(testcolormap[2]).charAt(3) == "|");
    console.assert(format_color_map(testcolormap[2]).charAt(12) == "|");
}

MisalignedColorPairTester();



