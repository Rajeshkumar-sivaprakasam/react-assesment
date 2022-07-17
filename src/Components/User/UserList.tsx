import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import { PostManager } from "../../manager/PostManager";
import { UserManager } from "../../manager/UserManager";
import { UsersInterface } from "../../model/UserModel";
import state from "../../store";
import "./user.css";
import { UserItem } from "./UserItem";

export const UserList = () => {
	const { selectedId } = useSnapshot(state);
	const { userList: users } = useSnapshot(state);
	const fetchUser = () => {
		UserManager.getAll();
	};
	const fetchPostById = (userId: number) => {
		PostManager.getElementByUserId(userId);
	};
	useEffect(() => {
		fetchUser();
	}, []);
	return (
		<div>
			{users.map((user: UsersInterface) => (
				<div
					style={{ cursor: "pointer" }}
					key={user.id.toString()}
					onClick={() => fetchPostById(user.id)}
				>
					<UserItem user={user} />
				</div>
			))}
		</div>
	);
};
