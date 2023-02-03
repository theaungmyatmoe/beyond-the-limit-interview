import {UserController} from "./controllers/user.controller";
import {UserService} from "./services/user.service";

const userService = new UserService()
const auth = new UserController(userService);

class App {
    login() {
        auth.login()
    }

}

