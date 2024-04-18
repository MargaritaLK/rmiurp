import Map, {Layer} from 'react-map-gl';

import type {FillLayer} from 'react-map-gl';
import type {LineLayer} from 'react-map-gl';




export const sitelocationsLineStyle: LineLayer = {
  id: 'sitelocations', 
  type: 'line',
  paint: {
    'line-color': '#e77148', 
    'line-width': 2, 
    'line-opacity': 0.9
  }
}





export const sitelocationsOddsLineStyle: LineLayer = {
  id: 'sitelocationsOdds', 
  type: 'line',
  paint: {
    'line-color': '#00f5d4', 
    'line-width': 2, 
    'line-opacity': 0.9
  }
}




// export const aucklandcoastStyleFill: FillLayer = {
//   id: 'aucklandcoastFill', 
//   type: 'fill',
//   paint: {
//     'fill-color': '#354545', 
//     'fill-opacity': 0.3
//   }
// }
