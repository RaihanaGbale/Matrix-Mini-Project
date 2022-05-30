class GoldRush extends Matrix {
    constructor() {
        super(5, 5)
        this.player1 = { score: 0, name: '' }
        this.player2 = { score: 0, name: '' }
        this.alter(0, 0, 1) //put player 1 on board to start
        this.alter(this.rows - 1, this.cols - 1, 2) //put player 2 on board to start
    }

    getFirstPlayerCoins() {
        return this.player1.score
    }

    getSecondPlayerCoins() {
        return this.player2.score
    }

    addCoinToScore(player) {
        switch (player) {
            case 1:
                {
                    this.player1.score += 10
                    if (this.player1.score == this.totalCoins / 2)
                        alert("player 1 won!")
                }
            case 2:
                {
                    this.player2.score += 10
                    if (this.player2.score == this.totalCoins / 2)
                        alert("player 2 won!")

                }
            default:
                "no such player"
        }
    }

    movePlayer(playerNum, direction) {
        let coordinate = this.findCoordinate(playerNum)
        switch (direction) {
            case "up":
                if (coordinate.y - 1 >= 0) {
                    if (this.get(coordinate.y - 1, coordinate.x) === "C") {
                        this.addCoinToScore(playerNum)
                    }
                    else if (this.get(coordinate.y - 1, coordinate.x) == ("1" || "2")) {
                        return
                    }
                    this.alter(coordinate.y, coordinate.x, ".")
                    this.alter(coordinate.y - 1, coordinate.x, playerNum)
                    break;
                }
            case "left":
                if (coordinate.x - 1 >= 0) {
                    if (this.get(coordinate.y, coordinate.x - 1) === "C") {
                        this.addCoinToScore(playerNum)
                    }
                    else if (this.get(coordinate.y, coordinate.x - 1) == ("1" || "2")) {
                        return
                    }
                    this.alter(coordinate.y, coordinate.x, ".")
                    this.alter(coordinate.y, coordinate.x - 1, playerNum)
                    break;
                }

            case "down":
                if (coordinate.y - 1 < this.rows) {
                    if (this.get(coordinate.y + 1, coordinate.x) === "C")
                        this.addCoinToScore(playerNum)
                    else if (this.get(coordinate.y + 1, coordinate.x) == ("1" || "2"))
                        return
                    this.alter(coordinate.y, coordinate.x, ".")
                    this.alter(coordinate.y + 1, coordinate.x, playerNum)
                    break;
                }
            case "right":
                if (coordinate.x + 1 < this.cols) {
                    if (this.get(coordinate.y, coordinate.x + 1) === "C")
                        this.addCoinToScore(playerNum)
                    else if (this.get(coordinate.y, coordinate.x + 1) == ("1" || "2"))
                        return
                    this.alter(coordinate.y, coordinate.x, ".")
                    this.alter(coordinate.y, coordinate.x + 1, playerNum)
                    break;
                }
            default: break
        }
    }

}
