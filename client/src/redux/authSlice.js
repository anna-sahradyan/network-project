import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../utils/axios.js";


//?Register
export const fetchLogin = createAsyncThunk(`auth/fetchLogin`, async ({username, password}) => {
    try {
        const {data} = await axios.post(`/auth/login`, {
            username,
            password
        });
        if (data.token) {
            window.localStorage.setItem("token", data.token)
        }
        return data
    } catch (err) {
        console.log(err)
    }
})
//?Login
export const fetchRegister = createAsyncThunk(`auth/fetchRegister`, async ({username, password}) => {
    try {
        const {data} = await axios.post(`/auth/register`, {
            username,
            password,
        })
        if (data.token) {
            window.localStorage.setItem("token", data.token)
        }
        return data
    } catch (err) {
        console.log(err)
    }
})
//? Get Me
export const fetchGetMe = createAsyncThunk(`auth/fetchGetMe`,async () => {
    try {
        const {data} = await axios.get(`/auth/me`);
        console.log(data)
        return data;

    } catch (err) {
        console.log(err)
    }

})
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        status: null,
        token: null,
        isLoading: false,
         data: null

    }, reducers: {
        logout: (state) => {

            state.user = null;
            state.status = null;
            state.token = null;
            state.isLoading = false;
        }
    },

    extraReducers: {
        //!Register
        [fetchRegister.pending]: (state) => {
            state.isLoading = false;
            state.status = null;


        }, [fetchRegister.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.token = action.payload?.token;
            state.user = action.payload?.user;
            state.status = action.payload.message;


        }, [fetchRegister.rejected]: (state, action) => {
            state.status = action.payload.message;
            state.isLoading = false;


        },
        //!Login
        [fetchLogin.pending]: (state) => {
            state.isLoading = false;
            state.status = null;


        }, [fetchLogin.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.status = action.payload.message;
            // state.data = action.payload;

        }, [fetchLogin.rejected]: (state, action) => {
            state.status = action.payload.message;
            state.isLoading = false;


        },
        //!GetMe
        [fetchGetMe.pending]: (state) => {
            state.isLoading = false;
            state.status = null;


        }, [fetchGetMe.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = null;
            state.token = action.payload?.token;
            state.user = action.payload?.user;

            // state.data = action.payload;

        }, [fetchGetMe.rejected]: (state, action) => {
            state.status = action.payload.message;
            state.isLoading = false;


        },

    }
});
export const {logout} = authSlice.actions;
export const checkIsAuth = (state) => Boolean(state.auth.token);//if token -->true if !token --> false
export default authSlice.reducer;