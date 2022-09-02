
import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    password: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => { 
    e.preventDefault();
    alert(`${data.fullName}.${data.contactNumber} ${data.email}`)
  };
  return (

    <>
      <div className="m-5">
        <h1 className="text-center">Thank you for contact us</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>

              <div className="mb-3">
                <label htmlFor="exampleInputFullName" className="form-label">FullName</label>
                <input type="text" className="form-control" id="exampleInputFullName" name="fullName" value={data.fullName} onChange={InputEvent} aria-describedby="emailHelp " />
                <div  className="form-text">We'll never share your Contact Number with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleContactNumber" className="form-label">Contact Number</label>
                <input type="text" className="form-control" id="exampleContactNumber" name="contactNumber" value={data.contactNumber} onChange={InputEvent} aria-describedby="emailHelp" />
                <div  className="form-text">We'll never share your Contact Number with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail" name="email" value={data.email} onChange={InputEvent} aria-describedby="emailHelp" />
                <div  className="form-text">We'll never share your email with anyone else.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={data.password} onChange={InputEvent} />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;