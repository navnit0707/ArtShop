import React, { Component } from "react";

class PostSample extends Component{
    render(){
        return(
            <div className="layout">
                <div className="body">
                    <div className="image">
                    img
                    </div>
                </div>
                <div className="footer">
                    <div className="description">
                            <h1>Art</h1>
                    </div>
                    <div className="price-details">
                        <div className="mrp">
                            <h1>1000</h1>
                        </div>
                        <div className="off-price">
                            <h1>400</h1>
                        </div>
                        <div className="offpercent">
                            <h1>60%</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostSample;