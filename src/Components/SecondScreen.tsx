import React from "react";
import PostScreen from "./Post/PostScreen";
import { UserScreen } from "./User/UserScreen";

const SecondScreen = () => {
	return (
		<div style={{ display: "flex",gap:20 }}>
			<UserScreen />
			<PostScreen />
		</div>
	);
};

export default SecondScreen;
