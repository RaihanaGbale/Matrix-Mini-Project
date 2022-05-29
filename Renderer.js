const source = $("#matrix-template").html();
const template = Handlebars.compile(source);

class Renderer {
    constructor() { }
    render(board) {

        let newHTML
        $(".matrix").empty()

        for (let i = 0; i < board.getCols(); i++) {
            newHTML = template({ matrix: board.getMatrix()[i] })
            $(".matrix").append(newHTML);
        }

        $("#player1").text("Player num 1- Score : "
            + board.getFirstPlayerCoins())
        $("#player2").text("Player num 2 - Score : "
            + board.getSecondPlayerCoins())
    }
}