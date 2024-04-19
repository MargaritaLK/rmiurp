import Map, {Layer} from 'react-map-gl';

import type {FillLayer} from 'react-map-gl';
import type {LineLayer} from 'react-map-gl';
import type {SymbolLayer} from 'react-map-gl';




export const sitelocationsLineStyle: LineLayer = {
  id: 'sitelocations', 
  type: 'line',
  paint: {
    'line-color': '#e77148', 
    'line-width': 4, 
    'line-opacity': 0.9
  }
}





export const sitelocationsOddsLineStyle: LineLayer = {
  id: 'sitelocationsOdds', 
  type: 'line',
  paint: {
    'line-color': '#fcbf49', 
    'line-width': 4, 
    'line-opacity': 0.9
  }
}




export const sitelocationsSymbolStyle: SymbolLayer = {
  id: 'sitenames', 
  type: 'symbol',
  layout: {
    "text-field": '{name}',
    "text-font": [
      "DIN Offc Pro Medium",
      "Arial Unicode MS Bold"
    ],
    "text-size": 17, 
  }, 
  paint: {
    "text-color": "#f1faee" ,
    // "text-color": "#212529", 
    "text-halo-color": "#212529",
    "text-halo-width": 1
  }
}




//     "text-color": "#e77148" ,