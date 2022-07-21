import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import { UserManager } from "../../manager/UserManager";
import { UsersInterface } from "../../model/UserModel";
import state from "../../store";
import "./user.css";
import { UserItem } from "./UserItem";

export const UserList = () => {
	const { userList: users } = useSnapshot(state); //for using valtio store variable

	//fething all users
	const fetchUser = () => {
		UserManager.getAll();
	};

	useEffect(() => {
		fetchUser();
	}, []);
	return (
		<div>
			{users.map((user: UsersInterface) => (
				<div
					style={{ cursor: "pointer" }} //cursor pointer for showing mouse logo like clickable
					key={user.id.toString()}
				>
					<UserItem user={user} />
				</div>
			))}
		</div>
	);
};;
