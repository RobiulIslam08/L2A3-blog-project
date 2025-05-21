import { IUser } from "../user/user.interface"
import { User } from "../user/user.model"


const register = async (payload:IUser) => {
const result = await User.create(payload)
// console.log(result)
return result
}
const login = async() => {

}
export const authService = {
	register,
	login
}