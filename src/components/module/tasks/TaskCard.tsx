import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask, toggleIsCompleted } from "@/redux/features/task/task";
import { selectUsers } from "@/redux/features/user/user";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { Trash2Icon } from "lucide-react";

const TaskCard = ({ task }) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const assignedUser = users.find((user) => user.id === task.assignedTo);


  return (
    <Card className=" mx-auto mt-2 py-0">
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="py-0">
        <div className="flex gap-3 items-center justify-between">
          <div className="flex gap-3 items-center">
            <div
              className={cn("h-4 w-4 rounded-full ", {
                "bg-green-600": task.priority === "low",
                "bg-yellow-600": task.priority === "medium",
                "bg-red-600": task.priority === "high",
              })}
            ></div>
            <h1
              className={`text-xl font-semibold ${cn({
                "line-through": task.isCompleted === true,
              })}`}
            >
              {task.title}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Trash2Icon
              onClick={() => dispatch(deleteTask(task.id))}
              color="#b21515"
            />
            <Checkbox
              onClick={() => dispatch(toggleIsCompleted(task.id))}
              id="terms"
            />
          </div>
        </div>
        <div className="py-3">
          <p>{task.description}</p>
          {assignedUser && <p className="text-gray-400 font-semibold">Assigned To - {assignedUser.name}</p>}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};

export default TaskCard;
