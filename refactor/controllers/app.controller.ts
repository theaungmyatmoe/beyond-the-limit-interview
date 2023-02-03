import {UserService} from "../services/user.service";
import {MessageService} from "../services/message.service";
import {UserDto} from "../dtos/userDto";
import {MessageDto} from "../dtos/messageDto";

export class AppController {
    userService: UserService;
    messageService: MessageService;

    constructor() {
        this.userService = new UserService();
        this.messageService = new MessageService();
    }

    login(data: UserDto) {
        return this.userService.login(data);
    }

    logout(data: UserDto) {
        return this.userService.logout(data);
    }

    register(data: UserDto) {
        return this.userService.register(data);
    }

    getProfile(data: UserDto) {
        return this.userService.getProfile(data);
    }

    updateProfile(data: UserDto) {
        return this.userService.updateProfile(data);
    }

    sendMessage(data: MessageDto) {
        return this.messageService.sendMessage(data);
    }

    getMessages(data: MessageDto) {
        return this.messageService.getMessages(data);
    }
}