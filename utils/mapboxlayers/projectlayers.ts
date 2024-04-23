import Map, {Layer} from 'react-map-gl';

import type {FillLayer} from 'react-map-gl';
import type {LineLayer} from 'react-map-gl';
import type {SymbolLayer} from 'react-map-gl';




export const sitelocationsLineStyle: LineLayer = {
  id: 'sitelocations', 
  type: 'line',
  paint: {
    'line-color': '#e77148', 
    'line-width': 10, 
    'line-opacity': 0.1
  }
}





export const sitelocationsOddsLineStyle: LineLayer = {
  id: 'sitelocationsOdds', 
  type: 'line',
  paint: {
    'line-color': '#fcbf49', 
    'line-width': 30, 
    'line-opacity': 0.1
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



export const sitelocationslargeSymbolStyle: SymbolLayer = {
  id: 'sitenameslarge', 
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
    "text-color": "#e77148" ,
    // "text-color": "#212529", 
    "text-halo-color": "#212529",
    "text-halo-width": 1
  }
}



export const sitelocationsCoastLineStyle: LineLayer = {
  id: 'coastalclass', 
  type: 'line',
  layout: {
    'line-cap': 'round', 
    'line-join': 'round',
  },
  paint: {
    'line-color': 
        ['match', ['get', 'odds'], 
        1, '#fcbf49', 
        2, '#e77148',
        '#e9ecef'],
    'line-width': 14, 
    'line-opacity': 0.8, 
    
  }
}



export const coastalineLineStyle1: LineLayer = {
  id: 'coastalclass1', 
  type: 'line',
  layout: {
    'line-cap': 'round', 
    'line-join': 'round',
  },
  paint: {
    'line-color': '#001524', 
    'line-width': 1.6, 
    'line-opacity': 0.9
  }
}



export const coastalineLineStyle2: LineLayer = {
  id: 'coastalclass2', 
  type: 'line',
  paint: {
    'line-color': 
        ['match', ['get', 'Structure'], 
        'Wall', '#00afb9', 
        'Berm', '#f07167',
        '#001524'],
    'line-width': 2, 
    'line-opacity': 1, 
    // 'line-dasharray': [2, 1],
  }
}







export const buildingDataFillStyle: FillLayer = {
  id: 'building',
  type: 'fill',
  paint: {
    'fill-color': '#343a40', 
    "fill-outline-color": '#343a40',
    'fill-opacity': 0.7
  }
};


export const EAADFillStyle: FillLayer = {
  id: 'EAAD100',
  type: 'fill',
  paint: {
    'fill-color': '#fb8500', 
    "fill-outline-color": '#fb8500',
    'fill-opacity': 0.3
  }
};



