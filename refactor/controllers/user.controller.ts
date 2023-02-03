import {IUserServiceDTO} from "../dto/user.dto";

export class UserController {
    constructor(
        private userService?: IUserServiceDTO
    ) {
    }

    login() {
    }

    logout() {
    }

    register() {
    }

    getProfile() {
        try {
            this.userService?.getProfile()
        } catch (e) {
            throw new Error("User Service is not provided")
        }
    }

    updateProfile() {
        try {
            this.userService?.updateProfile()
        } catch (e) {
            throw new Error("User Service is not provided")
        }
    }

}