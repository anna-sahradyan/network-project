import React from 'react';
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <>
            <div className={"w-full h-screen  bg-gradient-to-tl from-blue-300 to green-500 relative"}>
                <img src="/img/social2.jpg" alt="" className={" w-full h-full py-0 object-cover absolute mix-blend-overlay -z-50 bg-indigo-500 "}/>
            <form action="" onSubmit={(e) => e.preventDefault()} className={"w-1/3 h-60 mx-auto mt-40 bg-amber-50 rounded-xl shadow-amber-600 border-2 "}>
                <h1 className={"text-lg text-black text-center font-bold"}>Authorisation</h1>
                <label className={"text-lg text-black "}>Username
                    <input type={"text"} placeholder={"Username"}
                           className={"mt-1 text-white w-full rounded-lg bg-blue-800 border py-2 px-2 text-m outline-none placeholder:text-white text-sm"}/>
                </label>
                <label className={"text-lg text-black "}>Password
                    <input type={"password"} placeholder={"Password"}
                           className={"mt-1 text-white w-full rounded-lg bg-blue-800 border py-2 px-2 text-m outline-none placeholder:text-white text-sm"}/>
                </label>
                <div className="flex gap-8 justify-center mt-4">
                    <button type={"submit"} className="flex items-center text-xs bg-blue-800 text-white rounded-md  py-3 px-8">Sign in</button>
                    <Link to={"/register"}><button className="flex items-center text-xs bg-blue-800 text-white rounded-md  py-3 px-8">Sign up</button></Link>
                </div>

            </form>

        </div>
        </>
    );
};

export default LoginPage;