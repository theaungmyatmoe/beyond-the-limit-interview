import {UserService} from "../services/user.service";
import {UserDto} from "../dto/userDto";

export class SecondAppController {
    userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    login(data: UserDto) {
        return this.userService.login(data);
    }
}
