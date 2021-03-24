import React from 'react'
import 'fomantic-ui-css/semantic.css';
import '../assets/fomantic/dist/semantic.css';
import logo from '../images/download.png'


function Lower() {
    return (
        <div class="ui fluid container">
            <div class="ui grid">
                <div class="row" className="backtotop">
                    <p>Back to Top</p>
                </div>

                <div class="row footer">
                    <div class="four wide column">
                        <div class="ui list">
                            <div class="item"><a href="#">Get To Know Us</a></div>
                            <div class="item"><a href="#">About Us</a></div>
                            <div class="item"><a href="#">Careers</a></div>
                            <div class="item"><a href="#">Press Releases</a></div>
                            <div class="item"><a href="#">Amazon Cares</a></div>
                            <div class="item"><a href=""><a href="#">Gift a Smile</a></a></div>
                        </div>
                    </div>
                    <div class="four wide column">
                        <div class="ui list">
                            <div class="item"><a href="#">Connect With Us</a></div>
                            <div class="item"><a href="#">Facebook</a></div>
                            <div class="item"><a href="#">Twitter</a></div>
                            <div class="item"><a href="#">Instagram</a></div>
                        </div>
                    </div>
                    <div class="four wide column">
                        <div class="ui list">
                            <div class="item"><a href="#">Make Money with Us</a></div>
                            <div class="item"><a href="#">Sell on Amazon</a></div>
                            <div class="item"><a href="#">Sell Under Amazon Accelerator</a></div>
                            <div class="item"><a href="#">Amazon Global Selling</a></div>
                            <div class="item"><a href="#">Become an Affilate</a></div>
                            <div class="item"><a href="#">Fulfillment by Amazon</a></div>
                            <div class="item"><a href="#">Advertise Your Products</a></div>
                            <div class="item"><a href="#">Amazon pay on Merchants</a></div>
                            <div class="item"><a href="#">See More Make Money With Us</a></div>
                        </div>
                    </div>
                    <div class="four wide column">
                        <div class="ui list">
                            <div class="item"><a href="#">Let us Help you</a></div>
                            <div class="item"><a href="#">COVID-19 and Amazon</a></div>
                            <div class="item"><a href="#">Your Account</a></div>
                            <div class="item"><a href="#">Returns Center</a></div>
                            <div class="item"><a href="#">100% Purchase Protection</a></div>
                            <div class="item"><a href="#">Amazon App Download</a></div>
                        </div>
                    </div>
                    <div class="ui divider"></div>
                    <div class="ui two column centered grid footer-continue">
                        <div class="four column centered row">
                            <div class="column"> <img class="ui small image" src={logo} alt="logo" /></div>
                            <div class="column" >
                           
                                <select class="ui selection dropdown" className="d1">
                                
                                    <option value=""> <i class="globe icon"></i>English</option>
                                    <option value="0">Hindi</option>
                                    <option value="1">French</option>
                                    <option value="2">Italian</option>
                                    <option value="3">Arabic</option>
                                    
                                </select>
                            </div>
                        </div>
                    </div>



                </div>



            </div>
        </div>
    )
}

export default Lower
