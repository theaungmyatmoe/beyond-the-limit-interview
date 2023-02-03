import {UserService} from "./services/user.service";
import {UserDto} from "./dto/userDto";

class SecondAppController {
    userActions: UserService;

    constructor() {
        this.userActions = new UserService();
    }

    login(data: UserDto) {
        return this.userActions.login(data);
    }
}

class SecondAppView {
    renderLogin() {
    }
}

class SecondApp {
    controller: SecondAppController;
    view: SecondAppView;

    constructor() {
        this.controller = new SecondAppController();
        this.view = new SecondAppView();
    }
}
