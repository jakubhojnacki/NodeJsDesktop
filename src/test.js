/**
 * @module "Test" class
 * @description Test scenarios
 * @version 0.0.1 (2021-07-15)
 */

import Desktop from "./desktop.js";

export default class Test {
    get desktop() { return this.mDesktop; }

    constructor() {
        this.mDesktop = new Desktop();
    }

    async run() {
        this.desktop.writeLine("One");
        await this.desktop.getPosition();
        this.desktop.writeLine("Two");
    }
}
