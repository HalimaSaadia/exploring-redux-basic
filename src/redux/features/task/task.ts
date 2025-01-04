import { RootState } from "@/redux/store";
import { TTask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { deleteUser } from "../user/user";

type TInitialState = {
  tasks: TTask[];
  filter: string;
};

type TFilter = "all" | "low" | "medium" | "high";

const initialState: TInitialState = {
  tasks: [
    {
      title: "I don't know what to do",
      description: "As I don't know what to do How can I know How to do!!!! 😶",
      dueDate: "January 22nd, 2025",
      priority: "low",
      id: "37bee102-a05c-4e89-ae3d-bd95850e6cd7",
      isCompleted: false,
      assignedTo: "1111"
    },
    {
      title: "I am thinking what can I do",
      description: "As I don't know what to do How can I know How to do!!!! 😴",
      dueDate: "January 22nd, 2025",
      priority: "low",
      id: "37bee102-a05c-4e89-ae3d-bd95850e6cddfsd7",
      isCompleted: false,
      assignedTo: ""
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<TTask>) => {
      const id = uuidv4();
      const taskData = {
        ...payload,
        id,
        isCompleted: false,
      };
      state.tasks.push(taskData);
    },

    toggleIsCompleted: (state, { payload }: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === payload ? (task.isCompleted = !task.isCompleted) : task
      );
    },
    deleteTask: (state, { payload }: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
    updateFilter: (state, { payload }: PayloadAction<TFilter>) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder)=> {
    builder.addCase(deleteUser, (state, action)=> {
     state.tasks.forEach(task => task.assignedTo === action.payload ? task.assignedTo = null : task)
    })
  }
});

export const { addTask, toggleIsCompleted, deleteTask, updateFilter } =
  taskSlice.actions;

export const selectTask = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  } else {
    return state.todo.tasks;
  }
};

export default taskSlice.reducer;
