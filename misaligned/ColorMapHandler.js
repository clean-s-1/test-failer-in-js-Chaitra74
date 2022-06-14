import {ColorMap} from './ColorMap.js';

const colorsMap = [];
const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];


export function calculate_color_map(){    
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {   
            let pairIndex = i * 5 + j + 1; 
            colorsMap.push(new ColorMap(pairIndex,majorColors[i],minorColors[j]));
        }
    }
    return colorsMap;
}

export function format_color_map(colorMap){    
   return `${colorMap.pairIndex.toString().padStart(2,' ')} | ${colorMap.majorColor.toString().padStart(6,' ')} | ${colorMap.minorColor}`;
}

export function print_color_map(colorMaps) {
    colorMaps.forEach((colorMap) => {       
        print_console(format_color_map(colorMap));     
    });   
}

export function print_console(inputStr){
    console.log(inputStr);
}