import React, { useEffect, useState } from 'react';
import './start.css';
import'./Info.css';
import { stationState } from '../recoil/station';
import { useRecoilValue } from 'recoil';
import axios from "axios";
import { Link } from 'react-router-dom';

function InfoItem(){
    const station=useRecoilValue(stationState);

    const[a,setA]=useState("");
    const[b,setB]=useState("");
    const[c,setC]=useState("");
    const[d,setD]=useState("");

    const[upNumA,setUpNumA]=useState(false);
    const[upNumB,setUpNumB]=useState(false);
    const[upNumC,setUpNumC]=useState(false);
    const[upNumD,setUpNumd]=useState(false);


    const API_key='4b62624c48736f6f3732734550566c';
    const startIndex=0;
    const endIndex=4;

    const url=`http://swopenapi.seoul.go.kr/api/subway/${API_key}/json/realtimeStationArrival/${startIndex}/${endIndex}/${station}`
    
    const search=async()=>{
        try{
            const data=await axios({
                method:'get',
                url:url,
            })
            console.log(data.data);
            setA(data.data.realtimeArrivalList[0].arvlMsg2);
            if(data.data.realtimeArrivalList[0].updnLine=="상행"||data.data.realtimeArrivalList[0].updnLine=="외선"){
                setUpNumA(true);
            }else{
                setUpNumA(false);
            }

            setB(data.data.realtimeArrivalList[1].arvlMsg2);
            if(data.data.realtimeArrivalList[1].updnLine=="상행"||data.data.realtimeArrivalList[1].updnLine=="외선"){
                setUpNumB(true);
            }else{
                setUpNumB(false);
            }

            setC(data.data.realtimeArrivalList[2].arvlMsg2);
            if(data.data.realtimeArrivalList[2].updnLine=="상행"||data.data.realtimeArrivalList[2].updnLine=="외선"){
                setUpNumC(true);
            }else{
                setUpNumC(false);
            }

            setD(data.data.realtimeArrivalList[3].arvlMsg2);
            if(data.data.realtimeArrivalList[3].updnLine=="상행"||data.data.realtimeArrivalList[3].updnLine=="외선"){
                setUpNumd(true);
            }else{
                setUpNumd(false);
            }

        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        search();
    },[])

    return(
        <div className='info start'>
            <div className='pageWrapper'>
                <div className='header'> 
                    <div>
                        <Link to='/'>
                            <span style={{color:"#ffce32"}}>Sub</span>
                            <span style={{color:'#009223'}}>Way</span>
                        </Link>
                    </div>
                </div>
                <div className='content-wrapper'>
                    <div className='content-container' id='infoContent-container'>
                        <div className='info-title'>
                            <div>{station}역 도착 정보</div>
                        </div>
                        <div className='info-container'>
                            <div className='left'>
                                <div className='left-title'>상행 | 외선순환</div>
                                <div className='items'>
                                    <div className='item left-1' style={upNumA?{opacity:1}:{opacity:0}}>
                                        {a}
                                    </div>
                                    
                                    <div className='item left-2' style={upNumB?{opacity:1}:{opacity:0}}>
                                        {b}
                                    </div>
                                    <div className='item left-3' style={upNumC?{opacity:1}:{opacity:0}}>
                                        {c}
                                    </div>
                                    <div className='item left-4' style={upNumD?{opacity:1}:{opacity:0}}>
                                        {d}
                                    </div>
                                </div>

                            </div>
                            <div className='right'>
                                <div className='right-title'>하행 | 내선순환</div>
                                <div className='items'>
                                    <div className='item right-3' style={upNumC?{opacity:0}:{opacity:1}}>
                                        {c}
                                    </div>
                                    <div className='item right-4' style={upNumD?{opacity:0}:{opacity:1}}>
                                        {d}
                                    </div>
                                    <div className='item right-1' style={upNumA?{opacity:0}:{opacity:1}}>
                                        {a}
                                    </div>
                                    
                                    <div className='item right-2' style={upNumB?{opacity:0}:{opacity:1}}>
                                        {b}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoItem;
