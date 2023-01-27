import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {checkIsAuth, fetchRegister} from "../redux/authSlice";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";


const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {status} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const isAuth = useSelector(checkIsAuth);
    const navigate = useNavigate();
    const handleSubmit = () => {
        try {
            dispatch(fetchRegister({username, password}));
            setPassword("");
            setUsername("");

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        if (status) toast(status)
        if (isAuth) navigate(`/`)

    }, [status,navigate,isAuth])
    return (
        <>
            <div className={"w-full h-screen  bg-gradient-to-tl from-blue-300 to green-500 relative"}>
                <img src="/img/reg2.jpg" alt=""
                     className={" w-full h-full py-0 object-cover absolute mix-blend-overlay -z-50 bg-indigo-500 "}/>
                <form action="" onSubmit={(e) => e.preventDefault()}
                      className={"w-1/3 h-60 mx-auto mt-40 bg-amber-50 rounded-xl shadow-amber-600 border-2 "}>
                    <h1 className={"text-lg text-black text-center font-bold"}>Registration</h1>
                    <label className={"text-lg text-black "}>Username
                        <input
                            className={"mt-1 text-white w-full rounded-lg bg-blue-800 border py-2 px-2 text-m outline-none placeholder:text-white text-sm"}
                            type={"text"}
                            placeholder={"Username"}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label className={"text-lg text-black "}>Password
                        <input
                            className={"mt-1 text-white w-full rounded-lg bg-blue-800 border py-2 px-2 text-m outline-none placeholder:text-white text-sm"}
                            type={"password"}
                            placeholder={"Password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <div className="flex gap-8 justify-center mt-4">
                        <button
                            onClick={handleSubmit}
                            type={"submit"}
                            className="flex items-center text-xs bg-blue-800 text-white rounded-md  py-3 px-8">confirm
                        </button>
                        <Link to={"/login"}>
                            <button
                                className="flex items-center text-xs bg-blue-800 text-white rounded-md  py-3 px-8">Sign
                                in
                            </button>
                        </Link>
                    </div>

                </form>

            </div>
        </>
    );
};

export default RegisterPage;