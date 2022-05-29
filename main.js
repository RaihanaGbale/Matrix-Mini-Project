const board = new GoldRush()
const render = new Renderer()
render.render(board) 
$(document).keypress(function (evt) {
    switch (evt.which) {
        case 119: //w
            board.movePlayer(1, "up")
        case 97://a
            board.movePlayer(1, "left")
        case 115://s
            board.movePlayer(1, "down")
        case 100://d
            board.movePlayer(1, "right")
        case 105://i
            board.movePlayer(1, "up")
        case 106://j
            board.movePlayer(1, "left")
        case 107://k
            board.movePlayer(1, "down")
        case 108://l
            board.movePlayer(1, "right")
    }
    render.render(board)
})

$('button').on('click', function () {
    this.player1.name = $("#player1Name").val()
    this.player2.name = $("#player2Name").val()
})
