import {AppController} from "./controllers/app.controller";
import {AppView} from "./views/app.view";

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }
}


