import {UserController} from "./controllers/user.controller";
import {UserService} from "./services/user.service";

//  loose coupling and reuse everywhere

//  service is a class that has a single responsibility
const userService = new UserService()

//  controller is a class that has a single responsibility for specific  action
const auth = new UserController(userService);

class App {

    login() {
        auth.login()
    }

}

