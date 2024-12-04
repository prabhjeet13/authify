import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    editData : false,
    userData: localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null,
}