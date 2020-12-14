import { useEffect, useState } from "react";
import all from "./firebase/firebase_functions";

const Profiles = ({ user }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    if (user !== "") {
      all.readGroups(setGroups, user);
    }
  }, [user]);

  console.log("groups", groups);
  const displayGroups = groups.map((group, i) => {
    // console.log(group);
    return (
      <option key={i}>
        {i}-{group}
      </option>
    );
  });
  console.log(displayGroups);

  return (
    <div className='profiles'>
      <h2>Profile Page of {user}!</h2>
      <select>{displayGroups}</select>
    </div>
  );
};

export default Profiles;
