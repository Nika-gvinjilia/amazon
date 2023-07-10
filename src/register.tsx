

// import { FormEvent } from 'react';

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const Register = () => {

//     const [id, idchange] = useState("");
//     const [name, namechange] = useState("");
//     const [password, passwordchange] = useState("");
//     const [email, emailchange] = useState("");
//     // const [phone, phonechange] = useState("");
//     const [country, countrychange] = useState("india");
//     // const [address, addresschange] = useState("");
//     const [gender, genderchange] = useState("female");

//     const navigate = useNavigate();

//     const IsValidate = () => {
//         let isproceed = true;
//         let errormessage = 'Please enter the value in ';
//         if (id === null || id === '') {
//             isproceed = false;
//             errormessage += ' Username';
//         }
//         if (name === null || name === '') {
//             isproceed = false;
//             errormessage += ' Fullname';
//         }
//         if (password === null || password === '') {
//             isproceed = false;
//             errormessage += ' Password';
//         }
//         if (email === null || email === '') {
//             isproceed = false;
//             errormessage += ' Email';
//         }

//         if(!isproceed){
//             toast.warning(errormessage)
//         }else{
//             if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

//             }else{
//                 isproceed = false;
//                 toast.warning('Please enter the valid email')
//             }
//         }
//         return isproceed;
//     }


//     const handlesubmit = (e:FormEvent) => {
//             e.preventDefault();
//             let regobj = { id, name, password, email,  country, gender };
//             if (IsValidate()) {
//             //console.log(regobj);
//             fetch("http://localhost:3030/user", {
//                 method: "POST",
//                 headers: { 'content-type': 'application/json' },
//                 body: JSON.stringify(regobj)
//             }).then((res) => {
//                 toast.success('Registered successfully.')
//                 navigate('/Loginpage');
//             }).catch((err) => {
//                 toast.error('Failed :' + err.message);
//             });
//         }
//     }
//     return (
//         <div>
//             <div className="offset-lg-3 col-lg-6">
//                 <form className="container" onSubmit={handlesubmit}>
//                     <div className="card">
//                         <div className="card-header">
//                             <h1>User Registeration</h1>
//                         </div>
//                         <div className="card-body">

//                             <div className="row">
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>User Name <span className="errmsg">*</span></label>
//                                         <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Password <span className="errmsg">*</span></label>
//                                         <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Full Name <span className="errmsg">*</span></label>
//                                         <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Email <span className="errmsg">*</span></label>
//                                         <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
//                                     </div>
//                                 </div>
//                                 {/* <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Phone <span className="errmsg"></span></label>
//                                         <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
//                                     </div>
//                                 </div> */}
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Country <span className="errmsg">*</span></label>
//                                         <select value={country} onChange={e => countrychange(e.target.value)} className="form-control">
//                                             <option value="india">Georgia</option>
//                                             <option value="usa">USA</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                                 {/* <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label>Address</label>
//                                         <textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control"></textarea>
//                                     </div>
//                                 </div> */}
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Gender</label>
//                                         <br></br>
//                                         <input type="radio" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
//                                         <label>Male</label>
//                                         <input type="radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check"></input>
//                                         <label>Female</label>
//                                     </div>
//                                 </div>

//                             </div>

//                         </div>
//                         <div className="card-footer">
//                             <button type="submit" className="btn btn-dark ">
//                                 submit</button> |
//                             <Link to={"/"} className="btn btn-danger">Close</Link>
//                         </div>
//                     </div>
//                 </form>
//             </div>


//         </div>
//     );
// }

// export default Register;
import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register: React.FC = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("india");
  const [gender, setGender] = useState("female");

  const navigate = useNavigate();

  const isValidate = (): boolean => {
    let isProceed = true;
    let errorMessage = "Please enter a value in";
    if (!id) {
      isProceed = false;
      errorMessage += " Username";
    }
    if (!name) {
      isProceed = false;
      errorMessage += " Fullname";
    }
    if (!password) {
      isProceed = false;
      errorMessage += " Password";
    }
    if (!email) {
      isProceed = false;
      errorMessage += " Email";
    }
    if (!isProceed) {
      toast.warning(errorMessage);
    } else {
      if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        isProceed = false;
        toast.warning("Please enter a valid email");
      }
    }
    return isProceed;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let regObj = {
      id,
      name,
      password,
      email,
      country,
      gender,
    };
    if (isValidate()) {
      fetch("http://localhost:3030/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then((res) => {
          toast.success("Registered successfully.");
          navigate("/Loginpage");
        })
        .catch((err) => {
          toast.error("Failed: " + err.message);
        });
    }
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h1>User Registration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>User Name</label>
                    <input
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Country</label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="form-control"
                    >
                      <option value="india">Georgia</option>
                      <option value="usa">USA</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <br />
                    <input
                      type="radio"
                      checked={gender === "male"}
                      onChange={() => setGender("male")}
                      name="gender"
                      value="male"
                      className="app-check"
                    />
                    <label>Male</label>
                    <input
                      type="radio"
                      checked={gender === "female"}
                      onChange={() => setGender("female")}
                      name="gender"
                      value="female"
                      className="app-check"
                    />
                    <label>Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-dark">
                Submit
              </button>{" "}
              |
              <Link to={"/"} className="btn btn-danger">
                Close
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
