import {IMessageServiceDTO} from "../dto/message.dto";

export class MessageController {

    constructor(
        private messageService?: IMessageServiceDTO,
    ) {
    }

    sendMessage() {
    }

    getMessages() {
    }
}