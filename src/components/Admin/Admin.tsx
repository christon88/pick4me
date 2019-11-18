import React, { useState } from "react";
import useAuth from "../Session/useAuth";
import firebase from "../Firebase/Firebase";

const Admin = () => {
  const [email, setEmail] = useState();
  const { user } = useAuth();

  const rootRef = firebase.database().ref();

  const addFriend = (friendUser: any) => {
    const username = friendUser.username;
    const newUserKey = rootRef.child("friends/" + user.uid);
    const updateData = {
      [username]: true
    };
    newUserKey.update(updateData);
  };

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const userQuery = rootRef
      .child("users")
      .orderByChild("email")
      .equalTo(email)
      .limitToFirst(1);
    userQuery
      .once("value")
      .then(dataSnapshot => {
        dataSnapshot.forEach(snap => {
          addFriend(snap.val());
        });
      })
      .catch(err => console.log(err));
  };

  if (user) {
    return (
      <>
        <form onSubmit={handleSubmit} className="p4m-addFriend">
          <input
            name="email"
            value={email || ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
            type="text"
            placeholder="Email"
          />
          <button type="submit">Add friend</button>
        </form>
      </>
    );
  } else {
    return <div>Not signed in</div>;
  }
};

export default Admin;
