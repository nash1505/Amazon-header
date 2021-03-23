import React from 'react'
import 'fomantic-ui-css/semantic.css';
import '../assets/fomantic/dist/semantic.css';
import logo from '../images/download.png'

function Upper() {
    return (
        <div class="ui fluid container" className="c1">
            <div class="ui grid">
                <div class="row" className="row">




                    <div class="two wide column" className="logo">
                        <img class="ui small image" src={logo} />
                    </div>



                    <div class="two wide column" className="add">
                        Hello
                        <p><span className="textbold">Select Your Address</span></p>


                    </div>
                    <div class="seven wide column">
                        <div class="ui action input">

                            <div class="ui dropdown" className="dropdown_1">
                                <div >All</div>
                                <i class="dropdown icon"></i>
                            </div>


                            <input size="65" type="text" />

                            <button class="ui icon button" className="searchbutton">
                                <i class="search icon"></i>
                            </button>
                        </div>
                    </div>








                    <div class="one wide column" className="flag">
                        <div class="ui compact selection dropdown">
                            <i class="dropdown icon"></i>
                            <div class="text">Compact</div>
                            <div class="menu">
                                <div class="item">A</div>
                                <div class="item">B</div>
                                <div class="item">C</div>
                            </div>
                        </div>
                    </div>


                    <div class="two wide column" className="sign">
                        Hello,Sign in
                        <p>Account & Lists</p>
                    </div>

                    <div class="one wide column" className="return">
                        <a href="#">
                            Returns
                        <p>
                                & Order
                        </p>
                        </a>
                    </div>
                    <div class="one wide column" className="cart">

                        <i class="shopping cart icon"></i>
                        <p>Cart</p>
                    </div>

                </div>

            </div>
            <div class="ui segment" className="nav-bar">

                <div class="ui inverted secondary menu" >
                    <a class="item"><i class="bars icon"></i>All</a>
                    <a class="item">Best Sellers</a>
                    <a class="item">Mobiles</a>
                    <a class="item">Today's Deals</a>
                    <a class="item">Fashion</a>
                    <a class="item">New Releases</a>
                    <a class="item">Prime<i class="dropdown icon"></i></a>
                    <a class="item">Electronics</a>
                    <a class="item">Customer Service</a>
                </div>

            </div>

        </div>
    )
}

export default Upper


