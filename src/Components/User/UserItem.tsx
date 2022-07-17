import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { UsersInterface } from "../../model/UserModel";
import "./user.css";

interface UserItemProps {
	user: UsersInterface;
}

export const UserItem = ({ user }: UserItemProps) => {
	return (
		<Container>
			<ListGroup.Item className="userScreen">
				<Row>
					<Col xs lg="2">
						{user.id}
					</Col>
					<Col xs lg="8">
						{user.name}
					</Col>
				</Row>
			</ListGroup.Item>
		</Container>
	);
};
