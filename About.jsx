import React from "react";

import web2 from "../src/img/about.png";


const About = () => {
    return (

        <>

            <section id="header" className="d=flex align-items-center">
                <div className="container-fluid-nav_bg">
                    
                        <div className="col-10 mx-auto">


                            <div className="col-lg-11 order-1 order-lg-2 ">
                                <img src={web2} className="m-5 w-100 " alt="home.img" />
                            </div>
                            <div className="col-md-25  pt-5 pt-lg-0  order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1 className="about">
                                     Assumenda modi fugit eius corporis quasi maxime vel quis nostrum quisquam? Beatae est quidem, neque repudiandae eveniet necessitatibus ea molestiae magni omnis, dolorem delectus? Ullam consectetur dolorum voluptas impedit cupiditate similique incidunt dolor odio fugiat aliquam. Quos aliquid ipsam porro. Molestias, itaque! Quam ipsa, sunt reprehenderit ducimus, deserunt aliquid quasi excepturi voluptatibus iusto facere vitae cum, dignissimos veniam eligendi illum. Amet officia ducimus delectus, illum neque distinctio sequi quo nisi odit accusantium minus quos quisquam minima ullam nihil quas incidunt, accusamus facilis magnam!
                                </h1>
                                <div />


                            </div>
                        </div>
                  </div>
            </section>
        </>
    );
};

export default About;