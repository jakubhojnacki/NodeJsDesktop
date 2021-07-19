/**
 * @module "Desktop" class
 * @description Simple console controls
 * @version 0.0.1 (2021-07-15)
 */

import Position from "./position.js";
import Util from "util";

export default class Desktop {
    constructor() {
    }

    writeLine(pText) {
        console.info(pText);
    }

	clearScreen() {
        console.info(this.escape("2J"));
	}

	clearLine() {
		console.info(this.escape("2K"));
	}

    async getPosition() {
        let position = new Position();
        await new Promise(resolve => {
            const onData = (lData) => {
                console.info(Util.inspect(lData.toString()));
                if (process.stdin.isTTY)
                    process.stdin.setRawMode(false);
            };
            const onEnd = () => {
                process.stdin.removeListener('data', onData); 
                resolve();
            };
            if (process.stdin.isTTY)
                process.stdin.setRawMode(true);
            process.stdin.once("data", onData);
            process.stdin.once("end", onEnd);
            process.stdout.write(this.escape("6n"));
        });        
        return position;
    }

    moveTo(pColumn, pRow) {
        console.info(this.escape(`${pRow};${pColumn}H`));
        //<ESC>[{ROW};{COLUMN}R
    }

    escape(pCommand) {
        return "\u001b[" + pCommand;
    }    
}
