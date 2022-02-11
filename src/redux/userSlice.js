import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "N.A",
  phone: "N.A",
  email: "N.A",
  address: "N.A",
  pincode: "N.A",
  invoiceList: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserDetails: (state, action) => {
      state.fullName = action.payload.fullName;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.pincode = action.payload.pincode;
    },
    updateInvoiceList: (state, action) => {
      state.invoiceList = state.invoiceList.concat(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUserDetails, updateInvoiceList } = userSlice.actions;

export default userSlice.reducer;
