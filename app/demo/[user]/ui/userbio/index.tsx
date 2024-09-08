import { activityGraph } from "@/src/lib/ui/activityWebGraph";
import ActivityWebGraph from "./activityWeb";
import AvatarUI from "@/src/general/avatar";

function UserBio() {
  return (
    <div className="w-screen-lg flex flex-col mx-10 mb-10">
      <div className="flex">
        <AvatarUI className="h-20 w-20" />
        <div className="mx-5">
          <p className="text-2xl font-black">Firstname Lastname</p>
          <p className="text-gray">Schoolname</p>
        </div>
      </div>
      <ActivityWebGraph graphUtil={activityGraph} />
    </div>
  );
}

export default UserBio;
