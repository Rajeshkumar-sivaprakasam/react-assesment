import React from "react";
import { UsersInterface } from "../../model/UserModel";
import "./user.css";
import { faker } from "@faker-js/faker";
import { useSnapshot } from "valtio";
import state from "../../store";
import { PostManager } from "../../manager/PostManager";

//interface for userprops (if you didn't give it will thtough never error)
interface UserItemProps {
	user: UsersInterface;
}

export const UserItem = ({ user }: UserItemProps) => {
	const { selectedUser } = useSnapshot(state);
	const isSelected = selectedUser?.id === user.id;

	//fetch by particuler userId
	const fetchPostById = (user: UsersInterface) => {
		PostManager.getElementByUserId(user);
	};
	return (
		<div onClick={() => fetchPostById(user)}>
			<li
				className={`list-group-item ${isSelected ? "active" : ""}`}
				aria-current="true"
			>
				{" "}
				{/* list-group-item active */}
				<div className="row">
					<div className="col-6">
						<img
							src={faker.image.people(200, 200, true)}
							className="rounded float-start"
							style={{
								width: "50%",
								height: "100%",
								borderRadius: "50%",
							}}
							alt="..."
						/>
					</div>
					<div className="col-6">
						<h6 style={{ wordWrap: "break-word" }}>{user.username}</h6>
						<p>{user.website}</p>
					</div>
				</div>
			</li>
		</div>
	);
};
