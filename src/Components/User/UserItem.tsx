import React from "react";
import { UsersInterface } from "../../model/UserModel";
import "./user.css";
import { faker } from "@faker-js/faker";
import { useSnapshot } from "valtio";
import state from "../../store";

interface UserItemProps {
	user: UsersInterface;
}

export const UserItem = ({ user }: UserItemProps) => {
	const { selectedUser, selectedId } = useSnapshot(state);

	return (
		<>
			<li className="list-group-item" aria-current="true">
				{" "}
				{/* list-group-item active */}
				<div className="row">
					<div className="col-4" style={{ marginRight: 30 }}>
						<img
							src={faker.image.people(640, 640, true)}
							className="rounded float-start"
							style={{
								width: 100,
								height: 70,
								borderRadius: "50%",
							}}
							alt="..."
						></img>
					</div>
					<div className="col">
						<h6>{user.username}</h6>
						<p>{user.website}</p>
					</div>
				</div>
			</li>
		</>
	);
};
