import React, { useEffect } from "react";
import { UserManager } from "../../manager/UserManager";
import state from "../../store";
import "./user.css";
import { UserList } from "./UserList";

export const UserScreen = () => {
	return (
		<div>
			<UserList />
		</div>
	);
};
