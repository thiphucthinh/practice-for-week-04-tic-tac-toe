class Cursor {
    constructor(numRows, numCols, row, col, gridColor, cursorColor) {
        this.numRows = 3;
        this.numCols = 3;
        this.row = 0;
        this.col = 0;
        this.gridColor = "black";
        this.cursorColor = "yellow";
    }

    position(row = 0, col = 0) {
        return {
            row: this.row,
            col: this.col
        }
    }
}

module.exports = Cursor;
