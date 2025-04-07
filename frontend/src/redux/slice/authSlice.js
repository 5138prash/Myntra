import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

// Async function for login
export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const querySnapshot = await getDocs(collection(db, "users")); // Ensure "users" is correct
    const users = querySnapshot.docs.map((doc) => doc.data());
    const existingUser = users.find((user) => user.email === email);

    if (existingUser && existingUser.password === password) {
      localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
      return existingUser; // Return user data to set state
    } else {
      return rejectWithValue("Invalid credentials");
    }
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  user: localStorage.getItem("loggedInUser")
    ? JSON.parse(localStorage.getItem("loggedInUser"))
    : null,
  isAuthenticated: !!localStorage.getItem("loggedInUser"),
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("loggedInUser");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true; // Set isAuthenticated to true
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthenticated = false; // Ensure false on failure
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
