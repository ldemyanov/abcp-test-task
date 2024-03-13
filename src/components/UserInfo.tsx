import React from "react";
import { User } from "../types";

interface IUserInfoProps {
  user: User;
}

const UserInfo = React.memo(({ user }: IUserInfoProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user.name}</td>
          <td>{user.phone}</td>
        </tr>
      </tbody>
    </table>
  );
});


export default UserInfo;