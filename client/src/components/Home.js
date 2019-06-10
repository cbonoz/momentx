import React, { Component } from "react"

import logo1 from './../assets/fancoin1.png'
import logo2 from './../assets/fancoin2.png'
import logo3 from './../assets/fancoin3.png'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="paper card">
          <div className="row">
            <div className="profile-header-container">
              <div className="profile-header-img">
                <img
                  className="img-circle"
                  src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/633/341/datas/profile.jpg"
                  width="50"
                  height="50"
                />
                <div className="rank-label-container">
                  <span className="label label-default rank-label">
                    <img className='shaun-logo'
                      src="img/white-logo.png"
                    />
                  </span>
                </div>
                <h3 className="bolder text-center">Ruby Hsu</h3>
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <div className="card card-3">
                <h3 className="">3</h3>
                <h5 className="small">Coins Owned</h5>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <div className="card card-3">
                <h3 className="">$3.05</h3>
                <h5 className="small">Equivalent Bitcoin Value</h5>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <div className="card card-3">
                <h3 className="">+13%</h3>
                <h5 className="small">Percentage Change</h5>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row text-center">
              <label>Your Address: </label>
            </div>

            <div className="row">
              <input
                className="center-block"
                id="txtToAddr"
                type="text"
                size="50"
                value="0xEc2182D9Af459DA643AaA4A9FA621aADddB8ecfF"
              />
            </div>

            <div className="row">
              <button
                className="btn btn-custom center-block"
                id="btnTokensOf"
              >
                view your tokens
              </button>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading bg-teal text-center">Your Tokens</div>
            <table className="table small ">
              <thead>
                <tr className="">
                  <th>T.ID</th>
                  <th>Name</th>
                  <th>Data</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody class="">
                        <tr>
                            <th scope="row">
                                <img id="detail-icon-img" src={logo1} alt="bitcoin, cash, coin, currency, dollar, euro, finance icon" width="50" height="50"/>
                                <p class="text-center">101</p>
                            </th>
                            <td>Shaun White</td>
                            <td>Shaun White 31 wins his third gold medal in snowboarding halfpipe and the 100th gold medal for Team USA</td>
                            <td>
                                <a href="/details/shaun-white">
                                    <button type="submit" class="btn btn-custom">details</button>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <img id="detail-icon-img" src={logo2} alt="bitcoin, cash, coin, currency, dollar, euro, finance icon" width="50" height="50"/>
                                <p class="text-center">102</p>
                            </th>
                            <td>Redmond Gerard</td>
                            <td>Red Gerard 17 wins the first gold medal for team USA in the 2018 Olympics</td>
                            <td>
                                <button type="submit" class="btn btn-custom">details</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <img id="detail-icon-img" src={logo3} alt="bitcoin, cash, coin, currency, dollar, euro, finance icon" width="50" height="50"/>
                                <p class="text-center">103</p>
                            </th>
                            <td>Arielle Gold</td>
                            <td>Arielle Gold 21 wins the bronze medal for Team USA in snowboard halfpipe</td>
                            <td>
                                <button type="submit" class="btn btn-custom">details</button>
                            </td>
                        </tr>
                    </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
