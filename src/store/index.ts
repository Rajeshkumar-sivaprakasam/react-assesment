import { proxy } from 'valtio'
import { PostInterface } from '../model/PostModel';
import { UsersInterface } from '../model/UserModel';

interface props {
	userList: UsersInterface[];
	postList: PostInterface[]
}
//create valtio 
 const state:props = proxy({
    userList: [] ,
    postList:[]
})

export default state;