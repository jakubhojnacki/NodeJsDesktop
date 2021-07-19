/**
 * @module Main
 * @description Main script 
 * @version 0.0.1 (2021-07-19)
 */

import Test from "./src/test.js";

(async () => {
    const test = new Test();
    await test.run();
    console.info("End");
})();