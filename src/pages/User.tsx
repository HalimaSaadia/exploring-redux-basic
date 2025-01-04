import { AddUserModal } from "@/components/module/user/AddUserModal";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { deleteUser, selectUsers } from "@/redux/features/user/user";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Trash2Icon } from "lucide-react";

const User = () => {
  const user = useAppSelector(selectUsers);
  const dispatch = useAppDispatch()

  return (
    <div>
     <div className="py-5">
     <h1 className="text-3xl  text-center">This is user page</h1>
     </div>
      <div className="max-w-3xl mx-auto">
        <div className="mr-auto">
          <AddUserModal />
        </div>
        <div className="flex flex-wrap gap-5">
          {user?.map((user, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="sr-only">User Name</CardTitle>
                <CardDescription className="sr-only">
                  User Description
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between gap-5">
                <h1 className="text-xl">{user.name}</h1>
                <Trash2Icon
                    onClick={() => dispatch(deleteUser(user.id))}
                    color="#b21515"
                  />
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
