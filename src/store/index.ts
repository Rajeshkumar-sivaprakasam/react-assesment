import { proxy } from 'valtio'
import { PostInterface } from '../model/PostModel';
import { UsersInterface } from '../model/UserModel';

interface props {
	userList: UsersInterface[];
	postList: PostInterface[];
	selectedId: number;
}
//create valtio
const state: props = proxy({
	userList: [],
	postList: [],
	selectedId: 0,
});

export default state;