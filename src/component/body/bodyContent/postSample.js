import React from "react";
import pic2 from './../../../data/pic2.jpg';

class PostSample extends Comment{
    render(){
        return(
            <div className="layout">
                <div className="body">
                    <div className="image">
                        <img src={pic2} alt="pic"/>
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