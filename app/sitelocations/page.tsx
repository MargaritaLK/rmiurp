'use client'

import * as React from 'react';
import * as turf from '@turf/turf';

import Image from "next/image";
import {useState, useEffect, useMemo, useCallback} from 'react';

import Map, {Popup, Source, Layer, NavigationControl} from 'react-map-gl';

import {AttributionControl} from 'react-map-gl';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';


import { sitelocationsLineStyle} from '../../utils/mapboxlayers/projectlayers'
import { sitelocationsOddsLineStyle} from '../../utils/mapboxlayers/projectlayers'
import { sitelocationsSymbolStyle} from '../../utils/mapboxlayers/projectlayers'
import { log } from 'console';



const MAPBOX_PUBLIC_TOKEN = 'pk.eyJ1IjoibWFyZ2FyaXRhMTIiLCJhIjoiY2s1Nm5mNWpxMDRvcTNtbHppYm4xeTJpOSJ9.boMER5L2ddRxh1pR7hDWJA'; 



export default function Coastalmap() {
  
  const [sitelocationsData, setSitelocationsData] = useState(null)
  const [sitelocationsOddsData, setSitelocationsOddsData] = useState(null)
  const [namesData, setSNamesData] = useState(null)
  
  useEffect(() => {
    /* global fetch */
    fetch(
      'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_RMI/sitelocation.geojson'
    )
    .then(resp => resp.json())
    .then(json => {
      setSitelocationsData(json)})
      .catch(err => console.error('Could not load data', err)); // eslint-disable-line
    }, []);
    
  useEffect(() => {
      /* global fetch */
      fetch(
        'https://raw.githubusercontent.com/MargaritaLK/__data_experimental/main/P_RMI/sitelocation_odds_2.geojson'
      )
      .then(resp => resp.json())
      .then(json => {
        // console.log(json);
        setSitelocationsOddsData(json)})
        .catch(err => console.error('Could not load data', err)); // eslint-disable-line
      }, []);
      


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
        
  
        
      const data1 = useMemo(() => {
        return sitelocationsData
      }, [sitelocationsData])
      

      const data2 = useMemo(() => {
        return sitelocationsOddsData
      }, [sitelocationsOddsData])
      

      const data3 = useMemo(() => {
        return namesData
      }, [namesData])
    
      
      
      
      
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
          latitude: 7.099292,
          longitude: 171.30422,
          zoom: 12
        }}
        
        
        // mapStyle="mapbox://styles/margarita12/clusyi3io000y01rb5qlnhjq8" //                         
        mapStyle="mapbox://styles/margarita12/clv5x15je00je01og12u1g1lw" //                         
        mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
        interactiveLayerIds={['data1']}
        // onMouseMove={onHover}
        attributionControl={false}
        >
        <NavigationControl position="top-left" />
        
        
        
        <Source id='sitelocations' type="geojson" data = {data1}>
        <Layer {...sitelocationsLineStyle} />
        </Source>
        
        
        <Source id='sitelocationsOdds' type="geojson" data = {data2}>
        <Layer {...sitelocationsOddsLineStyle} />
        </Source>
        

        <Source id='sitenames' type="geojson" data = {data3}>
        <Layer {...sitelocationsSymbolStyle} />
        </Source>
        

                

      
        </Map>
        
        
        {/* </div> */}
        
        </div>
        
        <Footer />
        
        </div>
      );
    }