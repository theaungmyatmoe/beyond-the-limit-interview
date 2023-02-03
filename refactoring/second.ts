import {SecondAppController} from "./controllers/second_app.controller";
import {SecondAppView} from "./views/second_app.view";


class SecondApp {
    controller: SecondAppController;
    view: SecondAppView;

    constructor() {
        this.controller = new SecondAppController();
        this.view = new SecondAppView();
    }
}
