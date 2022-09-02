import React from "react";

import web from "../src/img/grow.png"
import web1 from "../src/img/create.png"
import Common from "./Common";
const Home = () => {
    return (

        <>
           <Common name1=' Grow your bussiness with Bussiness Boss' imgsrc1={web} visit1='/service' btname1 ='connect with us'
           name2='Create your plan with our top leaders' imgsrc2={web1} visit2='/service' btname2 ='connect with us'/>

        </>
    );
};

export default Home;