import React from "react";

import web3 from "../src/img/service1.png";
import web4 from "../src/img/service2.png";
import Common from "./Common";


const Service = () => {
    return (
        <>
           <Common name1=' web development using new and best technology' imgsrc1={web3} visit1='/contact' btname1 ='contact us'
            name2='you enjoy allot in our apps, it give some unique experiences' imgsrc2={web4} visit2='/contact' btname2 ='contact us'/>

        </>
    );
};

export default Service;