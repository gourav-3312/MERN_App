import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import signpic from "../images/signup.svg";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate("/login");
    }
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <form
                method="POST"
                action=""
                className="register-form"
                id="register-form"
              >
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Enter Your Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Enter Your Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i class="zmdi zmdi-smartphone"></i>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="Enter Your Phone Number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Enter Your Password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder="Re-enter Your Password"
                  />
                </div>

                <div className="form-group form button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>

            <div className="signup-image">
              <figure>
                <img src="" alt="Register Pic" />
                {/* <img src={signpic} alt="Register Pic" /> */}
              </figure>
              <NavLink to="/login" className="signup-image-link">
                Already have an account?
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
