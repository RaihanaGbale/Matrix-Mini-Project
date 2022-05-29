class Matrix {
    constructor(rows, cols) {
        this.matrix = this.generateMatrix(rows, cols)
        this.rows = rows
        this.cols = cols
    }

    print() {
        let line
        for (let i = 0; i < this.matrix.length; i++) {
            line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }

    get(row, col) {
        return this.matrix[row][col]
    }

    getCols() {
        return this.cols
    }

    getRows() {
        return this.rows
    }

    getMatrix() {
        return this.matrix;
    }

    alter(row, col, newNumber) {
        this.matrix[row][col] = newNumber
    }

    printColumn(col) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][col])
        }
    }

    printRow(row) {
        for (let i = 0; i < this.matrix[row].length; i++) {
            console.log(this.matrix[row][i])
        }
    }

    findCoordinate(number) {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === number) {
                    return ({ x: j, y: i })
                }
            }
        }
    }

    generateMatrix(rows, cols) {
        let matrix = []
        for (let r = 0; r < rows; r++) {
            matrix.push([]);
            for (let c = 0; c < cols; c++) {
                let coinsAmount = Math.floor(Math.random() * cols)
                if (coinsAmount === (c || r)) { matrix[r].push("C") }
                else { matrix[r].push(".") }
            }
        }
        return matrix
    }

}