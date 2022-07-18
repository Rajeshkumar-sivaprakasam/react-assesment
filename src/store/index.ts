import { proxy } from 'valtio'
import { PostInterface } from '../model/PostModel';
import { UsersInterface } from '../model/UserModel';

interface props {
	userList: UsersInterface[];
	postList: PostInterface[];
	selectedUser: UsersInterface | null;
	selectedId: number;
}
//create valtio
const state: props = proxy({
	userList: [],
	postList: [],
	selectedUser: null,
	selectedId: 0,
});

export default state;