import React, { Component } from 'react';

import coin1 from '../assets/coin.png'
import shaun1 from '../assets/shaun.png'

// import '../assets/coinflip.css'

class CoinDetails extends Component {
    render() {
        return (
            <div>
               
    <div className="container">
      <div className="paper card">
        <div className="container-fluid">

          <div className="row">
            <h1 className="coinInfo gold text-center" >Winter Olympics 2018</h1>
            <h4 className="coinInfo gold text-center" >Pyeong Chang, Korea</h4>
            <div className="col-12 center-block">
              <div id="coin-flip-cont" className="center-block">
                <div id="coin" className="center-block">
                  <div className="front frontmain">
                    <img className="thisCoin" src={coin1}/>
                  </div>
                  <div className="back backmain">
                    <img className="thisCoin" src={shaun1}/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="card card-3">
                    <h4 className="">Shaun White</h4>
                    <h5 className="small">Player name</h5>
                </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="card card-3">
                    <h4 className="">Snowboarding Halfpipe</h4>
                    {/* <i className="material-icons">bubble_chart</i>  */}
                    <h5 className="small">Sport</h5>
                </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="card card-3">
                    <h4 className="">2018 Olympic Winter Games Pyeongchang</h4>
                    <h5 className="small">Year</h5>
                </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card card-3">
                    <h4 className="">Shaun White 31 wins his third gold medal in snowboarding halfpipe and the 100th gold medal for Team USA</h4>
                    <h5 className="small">Data</h5>
                </div>
            </div>
          </div> 

          <div className="row">
            <button className="btn btn-custom center-block" id="btnTokensOf">sell your token</button>
          </div> 
        </div> 
      </div> 
    </div> 
 
            </div>
        );
    }
}

export default CoinDetails;