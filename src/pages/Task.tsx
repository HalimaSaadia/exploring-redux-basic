import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
// import { selectTask, updateFilter } from "@/redux/features/task/task";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Task = () => {
  // const tasks = useAppSelector(selectTask);
  // const dispatch = useAppDispatch();

  const {data, isLoading, isError} = useGetTasksQuery(undefined)
  // const {tasks} = data
  console.log(data)
 

  return (
    <div className="p-5 max-w-2xl mx-auto">
      <div className="flex justify-end gap-2 py-2">
        {/* <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => dispatch(updateFilter("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("high"))}
              value="high"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs> */}
        <AddTaskModal />
      </div>
      <div className="">
        {data?.tasks.map((task, idx) => (
          <TaskCard key={idx} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Task;
