import {UserService} from "./services/user.service";
import {UserController} from "./controllers/user.controller";

const userService = new UserService()
const auth = new UserController(userService);

class SecondApp {
    login() {
        auth.login()
    }
}

