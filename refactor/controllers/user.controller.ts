import {IUserServiceDto} from "../dto/user.dto";

export class UserController {
    constructor(
        private userService?: IUserServiceDto
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