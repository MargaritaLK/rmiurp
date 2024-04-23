'use client'

import * as React from 'react';
import * as turf from '@turf/turf';

import Image from "next/image";
import {useState, useEffect, useMemo, useCallback} from 'react';

import Map, {Popup, Source, Layer, NavigationControl} from 'react-map-gl';

import {AttributionControl} from 'react-map-gl';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';


import {water_mpx, buildings_mpx} from '../../utils/mapboxlayers/mapboxlayers'

import { sitelocationsCoastLineStyle} from '../../utils/mapboxlayers/projectlayers'


import { sitelocationsSymbolStyle} from '../../utils/mapboxlayers/projectlayers'
import { sitelocationslargeSymbolStyle} from '../../utils/mapboxlayers/projectlayers'
import { coastalineLineStyle1} from '../../utils/mapboxlayers/projectlayers'
import { coastalineLineStyle2} from '../../utils/mapboxlayers/projectlayers'
import { buildingDataFillStyle} from '../../utils/mapboxlayers/projectlayers'
import { EAADFillStyle} from '../../utils/mapboxlayers/projectlayers'




import { log } from 'console';



const MAPBOX_PUBLIC_TOKEN = 'pk.eyJ1IjoibWFyZ2FyaXRhMTIiLCJhIjoiY2s1Nm5mNWpxMDRvcTNtbHppYm4xeTJpOSJ9.boMER5L2ddRxh1pR7hDWJA'; 



export default function Coastalmap() {
  
  const [sitelocationsCoastData, setSitelocationsCoastData] = useState(null)
  const [namesData, setSNamesData] = useState(null)
  const [namesLargeData, setNamesLargeData] = useState(null)
  const [coastalClassData, setCoastalClassData] = useState(null)
  const [buildingData, setBuildingData] = useState(null)
  const [EAAD100, setEAAD100] = useState(null)




      
      useEffect(() => {
        /* global fetch */
        fetch(
          'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_RMI/names_numbers_v3.geojson'
        )
        .then(resp => resp.json())
        .then(json => {
          // console.log(json);
          setSNamesData(json)})
          .catch(err => console.error('Could not load data', err)); // eslint-disable-line
        }, []);
        
        
        
        useEffect(() => {
          /* global fetch */
          fetch(
            'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_RMI/larger_site_names.geojson'
          )
          .then(resp => resp.json())
          .then(json => {
            // console.log(json);
            setNamesLargeData(json)})
            .catch(err => console.error('Could not load data', err)); // eslint-disable-line
          }, []);
          

                  
        
        useEffect(() => {
          /* global fetch */
          fetch(
            'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_RMI/coastal_classification_v3.geojson'
          )
          .then(resp => resp.json())
          .then(json => {
            // console.log(json);
            setCoastalClassData(json)})
            .catch(err => console.error('Could not load data', err)); // eslint-disable-line
          }, []);


          useEffect(() => {
            /* global fetch */
            fetch(
              'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_RMI/buildings.geojson'
            )
            .then(resp => resp.json())
            .then(json => {
              // console.log(json);
              setBuildingData(json)})
              .catch(err => console.error('Could not load data', err)); // eslint-disable-line
            }, []);
  

            
          useEffect(() => {
            /* global fetch */
            fetch(
              'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_RMI/site_locations_along_coast_fix.geojson'
            )
            .then(resp => resp.json())
            .then(json => {
              // console.log(json);
              setSitelocationsCoastData(json)})
              .catch(err => console.error('Could not load data', err)); // eslint-disable-line
            }, []);
  


            useEffect(() => {
              /* global fetch */
              fetch(
                'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_RMI/EAAD_100_v2.geojson'
              )
              .then(resp => resp.json())
              .then(json => {
                // console.log(json);
                setEAAD100(json)})
                .catch(err => console.error('Could not load data', err)); // eslint-disable-line
              }, []);
    
  
          
          const data3 = useMemo(() => {
            return namesData
          }, [namesData])
          
          
          const data4 = useMemo(() => {
            return namesLargeData
          }, [namesLargeData])
          
          
          const data5 = useMemo(() => {
            return coastalClassData
          }, [coastalClassData])
          

          const data6 = useMemo(() => {
            return buildingData
          }, [buildingData])



          const data7 = useMemo(() => {
            return sitelocationsCoastData
          }, [sitelocationsCoastData])

          
          const data8 = useMemo(() => {
            return EAAD100
          }, [EAAD100])

          
          


          return (
            <div>
            <Navbar />
            
            <div className=" pt-[120px] min-h-screen flex-col items-center justify-between p-20 bg-[#1f3940]">
            <div>
            <div className="flex text-[#e77148] text-2xl tracking-wider text-transform:uppercase py-5">RMI URP - SITE LOCATIONS </div>
            <div className="flex text-[#AAAFAF]  tracking-wider text-transform:uppercase py-5 "> </div>
            </div>
            
            
            <Map
            
            style={{ height: '90vh'}}
            initialViewState={{
              latitude: 7.0999,
              longitude: 171.30422,
              zoom: 11.2
            }}
            
            
            // mapStyle="mapbox://styles/mapbox/satellite-streets-v12" //                         
            // mapStyle="mapbox://styles/margarita12/clv5x15je00je01og12u1g1lw" //                         
            // mapStyle="mapbox://styles/margarita12/clv5ytkac00jz01pp842u728a" //           Lighter version        
            // mapStyle="mapbox://styles/mapbox/outdoors-v12"                   //           outdoors        
            // mapStyle="mapbox://styles/margarita12/clusyi3io000y01rb5qlnhjq8" //         dark
            mapStyle="mapbox://styles/margarita12/clvbsui1j00rz01rje0io2akc" //         dark
            // mapStyle="mapbox://styles/margarita12/clvbvzzch006q01rdc5y2g2hf" //         dark
            

            
                    

            
            
            
            mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
            interactiveLayerIds={['data1']}
            // onMouseMove={onHover}
            attributionControl={false}
            >
            <NavigationControl position="top-left" />
            
            


          {/* <Source id='EAAD100' type="geojson" data = {data8}>
            <Layer {...EAADFillStyle} />
            </Source>
  */}

            
            <Source id='sitelocationsCoast' type="geojson" data = {data7}>
            <Layer {...sitelocationsCoastLineStyle} />
            </Source>

            
            <Source id='coastalclass1' type="geojson" data = {data5}>
            <Layer {...coastalineLineStyle1} />
            </Source>

            
            <Source id='sitenames' type="geojson" data = {data3}>
            <Layer {...sitelocationsSymbolStyle} />
            </Source>


            
            <Source id='sitenameslarge' type="geojson" data = {data4}>
            <Layer {...sitelocationslargeSymbolStyle} />
            </Source>
            



            
{/* 
            <Source id='coastalclass2' type="geojson" data = {data5}>
            <Layer {...coastalineLineStyle2} />
            </Source>
             */}

            {/* <Source id='buildings' type="geojson" data = {data6}>
            <Layer {...buildingDataFillStyle} />
            </Source>
             */}
                


          {/* <Layer {...buildings_mpx} /> */}
      {/* <Layer {...water_mpx} />  */}
  
            
            
  
            </Map>
            
            
            {/* </div> */}
            
            </div>
            
            <Footer />
            
            </div>
          );
        }