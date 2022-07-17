import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useSnapshot } from "valtio";
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
