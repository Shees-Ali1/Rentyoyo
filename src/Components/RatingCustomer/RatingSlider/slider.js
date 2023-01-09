import React from "react";
import './slider.css'
import { Steps } from 'rsuite';
const steps = [" 1", "2", "3", "4", "5"];
const Step = ({ currentIndex }) => {

    
    return (
        <div className="steps-container">

<div className="progress">
<Steps current={1}>
    <Steps.Item />
    <Steps.Item  className="shees"/>
    <Steps.Item />
    <Steps.Item />
    <Steps.Item />
  </Steps>
</div>
<div className="Progress-NumberSize">
<div className="Progress-Number">
            {steps.map((step, index) => {
                let color = currentIndex === index ? "#cc5500" : "black";
                console.log("color", color);
                return (
                    <div className="steps-item">
                        <h3
                            style={{
                                margin: 0,
                                color: color
                            }}
                        >
                            {step}
                        </h3>
                    </div>
                );
            })}
 </div>
 </div>
        </div>
    );
};
export default Step;