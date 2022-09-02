import React from "react";
import { NavLink } from "react-router-dom";



const Common = (props) => {
    return (
        <>
            <section id="header" className="d=flex align-items-center">
                <div className="container-fluid-nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6  pt-5 pt-lg-0  order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1 className="">
                                        {props.name1}
                                    </h1>
                                    <div className="mt-3">
                                        <NavLink to={props.visit1} className="btn-connect">
                                            {props.btname1}
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 ">
                                    <img src={props.imgsrc1} className="m-5 w-100 " alt="home.img" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6  pt-5 pt-lg-0  order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1 className="">
                                        {props.name2}
                                    </h1>


                                    <div className="mt-3">
                                        <NavLink to={props.visit2} className="btn-connect">
                                            {props.btname2}
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 ">
                                    <img src={props.imgsrc2} className="m-5 w-100 " alt="home.img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Common;