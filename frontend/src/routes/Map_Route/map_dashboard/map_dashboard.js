import styled from 'styled-components';
import SideBar from '../../../components/Side_Board/Side_Board';


import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api'
import { useEffect,useState } from 'react';

import { db } from '../../../services/config';
import { collection, getDocs  } from 'firebase/firestore';


import trash_can from '../../../assests/Trash_Can_1.png'
import { useRef } from 'react';

const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const mapStyles = [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    }
  ];

const MapPage = () => {
    const [position, setPosition] = useState()

    const [center, setCenter] = useState({
        lat: 10.777089565880239,
        lng:  106.69526610390457
    })
    

    useEffect(()=>{
        const getPositionData = async () => {
            const querySnapshot = await getDocs(collection(db, "MCP_INFO"));
            const temp = [];
            querySnapshot.forEach((doc) => {
                temp.push(doc.data());
            });
            
            setPosition(temp);
        }
        getPositionData();
    },[])

    const optionRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault();
        const [lat, lng] = optionRef.current.value.split('_');
        setCenter({
            lat: parseFloat(lat),
            lng: parseFloat(lng)
        })
    }

    const [selectedMarker, setSelectedMarker] = useState({

    });

    const onMarkerClick = (item) => {
      setSelectedMarker({
        lat: item.lat,
        lng: item.lng,
      });
    };
  
    const onCloseClick = () => {
      setSelectedMarker(false);
    };

    return (
        <Wrapper>
           <SideBar />
           
           <div className='map_container'>
            <LoadScript
                    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API}
                    libraries={["marker"]}
                    >
                    <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={18}
                    
                    options={{
                        zoomControl: false,
                        minZoom: 18,
                        maxZoom: 18,   
                        styles: mapStyles
                                             
                    }}
                    // options={{
                    // gestureHandling: 'none',
                    // }}                          
                    
                    >
                    {    
                        position && position.map((item, index) => {
                            return (<Marker 
                                key={index} 
                                position={item} 
                                icon={trash_can}    
                                onClick={()=>{onMarkerClick(item)}}
                            >
                                {
                                    selectedMarker.lat === item.lat && selectedMarker.lng === item.lng && (
                                        <InfoWindow
                                        position={item}
                                        clickable={true}
                                        onCloseClick={onCloseClick}
                                        >
                                            <div className='window_container'>
                                                <h3>{item.name}</h3>
                                                <div className='window_content'>
                                                    <p> Collector: 
                                                        <select>
                                                            <option value="" selected disabled hidden>Choose Staff</option>
                                                            <option value="1">Anh Kent</option>
                                                            <option value="2">Duy Tien</option>
                                                            <option value="3">Do Thien</option>
                                                        </select>
                                                    </p>
                                                    <p> Janitor:
                                                        <select>
                                                            <option value="" selected disabled hidden>Choose Staff</option>
                                                            <option value="1">Anh Kent</option>
                                                            <option value="2">Duy Tien</option>
                                                            <option value="3">Do Thien</option>
                                                        </select> 
                                                    </p>
                                                    <hr></hr>
                                                    <p>Capacity: 76%</p>
                                                    <hr></hr>
                                                    <ul>
                                                        <li>Waste: 10%</li>
                                                        <li>Recycle: 20%</li>
                                                        <li>Compost: 30%</li>
                                                    </ul>
                                                </div>
                                                <button>Assign</button>
                                            </div>
                                        </InfoWindow>
                                    )
                                }
                            </Marker>)
                        })
                    }
                    
                    <></>
                    </GoogleMap>
                    
                </LoadScript>
               <div className='mcp_overview'>
                     <form className='mcp_content' onSubmit={submitHandler}> 
                        Choose MCP
                        <select ref={optionRef}>
                            <option value="" selected disabled hidden>Choose MCPs</option>
                            {
                                position && position.map((item, index) => {
                                    return <option key={index} value={`${item.lat}_${item.lng}`}>{item.name}</option>
                                })
                            }
                        </select>
                        <div className='mcp_btns'>
                            <button type='reset'>Cancel</button>
                            <button type='submit' className='submit_btn'>Submit</button>
                        </div>
                     </form>
               </div>
            </div>
        </Wrapper>
    );
}


const Wrapper = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100vh;
    max-height: 100%;
    display: grid;
    align-items: center;
    gap: 20px;
    grid-template-columns: 0.6fr 2fr 0.5fr;
    grid-template-rows: 1fr 1fr;
    font-family: 'Varela Round', sans-serif;
    .map_container{
        position: relative;
        border-radius: 0.5rem;
        grid-column: 2/4;
        grid-row: 1/3;
        width: 100%;
        height:90%;
        padding: 1rem;
        background-color: #2e3033;
    }
    .mcp_overview{
        position: absolute;
        z-index:100;
        bottom: 1rem;
        width: 300px;
        height: 150px;
        background-color: #2e3033;
                box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
        border-radius: 0.5rem;
        
    }
    .mcp_content{
        padding: 1.5rem;
        color: #fff;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        select{
            margin-top: 1rem;
            width: 100%;
            height: 2rem;
            border-radius: 0.5rem;
            border: none;
            outline: none;
            background-color: #fff;
            color: #000;
            padding: 0.5rem;
        }
    }
    .mcp_btns{
        margin-top: 1rem;

        display: flex;
        justify-content: space-evenly;
        width: 100%;
        button{
            border-radius: 0.5rem;
            border: none;
            outline: none;
            background-color: #fff;
            color: #000;
            padding: 0.25rem 1rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.25rem;
            transition: all 0.3s ease-in-out;
            justify-content: center;
        }
        button:hover{
            transform: scale(1.1);
            color: #3498db;
            border: 1px solid #3498db;

            box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
        }
    }
    .window_container{
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        button {
            margin-top: 1rem;
        }
    }

`;
export default MapPage;