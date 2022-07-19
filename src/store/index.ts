import { proxy } from 'valtio'
import { PostInterface } from '../model/PostModel';
import { UsersInterface } from '../model/UserModel';

interface props {
	userList: UsersInterface[];
	postList: PostInterface[];
	selectedUser: UsersInterface | null;
}
//create valtio
const state: props = proxy({
	userList: [],
	postList: [],
	selectedUser: null,
});

export default state;