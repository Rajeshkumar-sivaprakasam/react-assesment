import React from "react";
import { UsersInterface } from "../../model/UserModel";
import "./user.css";
import { faker } from "@faker-js/faker";

interface UserItemProps {
	user: UsersInterface;
}

export const UserItem = ({ user }: UserItemProps) => {
	return (
		// <Container>
		// 	<ListGroup.Item classNameName="userScreen">
		// 		<Row>
		// 			<Col xs lg="2">
		// 				{user.id}
		// 			</Col>
		// 			<Col xs lg="8">
		// 				{user.name}
		// 			</Col>
		// 		</Row>
		// 	</ListGroup.Item>
		// </Container>
		<>
			<ul className="list-group">
				<li className="list-group-item" aria-current="true">
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
			</ul>
		</>
	);
};
