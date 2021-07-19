/**
 * @module "Position" class
 * @description Keeps column + row position
 * @version 0.0.1 (2021-07-19)
 */

export default class Position {
    get column() { return this.mColumn; }
    set column(pValue) { this.mColumn = pValue; }
    get row() { return this.mRow; }
    set row(pValue) { this.mRow = pValue; }

    constructor(pColumn, pRow) {
        this.mColumn = pColumn ? pColumn : 1;
        this.mRow = pRow ? pRow : 1;
    }
}