import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

type TUser ={ id: string; name: string }

type TInitialState = {
  users: TUser[];
  filter: string;
};


const initialState: TInitialState = {
  users: [
    {
      id: "1111",
      name: "Halima",
    },
  ],
  filter: "all",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, { payload }: PayloadAction<TUser>) => {
      const id = uuidv4();
      const userData = {
        ...payload,
        id,
       
      };
      state.users.push(userData);
    },

  
    deleteUser: (state, { payload }: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== payload);
    }
  },
});

export const { addUser, deleteUser } =
  userSlice.actions;

export const selectUsers = (state: RootState) => state.users.users

export default userSlice.reducer;
