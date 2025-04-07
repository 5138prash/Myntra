import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import baseApi from "../api/axiosInstance";


const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
 

  const handleSignup = async () => {
    try {
      const response = await baseApi.post("/user/register", formData)
      toast.success("Signup success");
      navigate("/login");
    } catch (error) {
      console.error("Error in user registration", error);
      toast.error("Signup failed");
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="bg-[#ff3e6c]/10 w-full h-[907px] mt-[84px] flex justify-center pt-8">
          <div className="w-[400px] h-full bg-white">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg"
              alt=""
            />
            <div className="flex flex-col pt-10 px-10">
              <label className="font-bold text-[20px] text-gray-600 mb-2">
                Signup
              </label>
              <div className="flex flex-col gap-4 w-full text-[13px]">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required={true}
                  placeholder="parshant@example.com"
                  className="bg-gray-200/40 rounded p-2 outline-[#ff3e6c]"
                />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required={true}
                  placeholder="Prashant Tripathi"
                  className="bg-gray-200/40 rounded p-2 outline-[#ff3e6c]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required={true}
                  className="bg-gray-200/40 rounded p-2 outline-[#ff3e6c]"
                />
              </div>
              <div className="w-full flex justify-center py-4">
                <button
                  type="submit"
                  className="bg-[#ff3e6c] hover:bg-pink-600 cursor-pointer text-white px-5 py-2 text-[18px] rounded w-full"
                >
                  Submit
                </button>
              </div>
              <div className="text-[12px] text-center mt-2">
                <p>
                  Have an account?
                  <span
                    onClick={() => navigate("/login")}
                    className="cursor-pointer text-[#ff3e6c] font-bold"
                  >
                    Log in
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Signup;
