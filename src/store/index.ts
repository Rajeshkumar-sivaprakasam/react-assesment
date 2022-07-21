import { proxy } from 'valtio'
import { PostInterface } from '../model/PostModel';
import { UsersInterface } from '../model/UserModel';

interface props {
	userList: UsersInterface[];
	postList: PostInterface[];
	selectedUser: UsersInterface | null;
	isLoading: boolean;
}
//create valtio
const state: props = proxy({
	userList: [],
	postList: [],
	selectedUser: null,
	isLoading: true,
});

export default state;