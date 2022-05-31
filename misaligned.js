const {expect} = require('chai')

const colorsMap = new Map();
const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];

function calculate_color_map(){    
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {           
            let pairIndex = i * 5 + j;
            colorsMap.set(pairIndex, `| ${majorColors[i]} | ${minorColors[j]}`)
        }
    }
    return colorsMap;
}

function print_color_map(colorMap) {
    colorMap.forEach((element, key) => {       
        console.log(`${key} ${element}`);        
    });   
}

colormap = calculate_color_map();
result = print_color_map(colormap);

expect(colormap.size).equals(25);
expect(colormap.get(0)).equals(undefined);
expect(colormap.get(1)).equals('| White | Blue');

console.log('All is well (maybe!)');