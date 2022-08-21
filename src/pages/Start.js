import React, { useEffect , useState} from 'react';
import './start.css';
import { Link } from 'react-router-dom';
import {useRecoilState} from 'recoil';
import { stationState } from '../recoil/station';

function Start(){
    const [station,setStation]=useRecoilState(stationState);

    const onChangeStation=(e)=>{
        setStation(e.target.value)
    }

    return(
        <div className='start'>
            <div className='pageWrapper'>
                <div className='header'> 
                    <div>
                        <span style={{color:"#ffce32"}}>Sub</span>
                        <span style={{color:'#009223'}}>Way</span>
                    </div>
                </div>
                <div className='content-wrapper'>
                    <div className='content-container'>
                        <div className='content-title'>
                            <div>역명 검색</div>
                        </div>
                        <div className='search-form-container'>
                            <form>
                                <div className='search-input-container'>
                                    <input onChange={onChangeStation} id='startStation' className='search-input' type='text'></input>
                                </div>
                                <div className='search-btncontrol'>
                                    <input className='searchBtn' type='reset' value='retry' id='retrybtn'></input>
                                    <Link to='info'>
                                        <button className='searchBtn'>search</button>
                                    </Link>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Start;
