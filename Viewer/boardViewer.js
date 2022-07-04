class BoardViewer
{
    constructor(){}
    update(board)
    {
        const alldiv = document.getElementById("board");
        for (let x =0; x<board[0].length; x ++)
        {
        const div = alldiv.children[x];
        console.log(div.children.length)
        for (let y = 0; y<div.children.length; y++)
        {
            const a = div.children[y];
            a.innerHTML = board[x][y]? board[x][y].data : "n" ;
        }
        }
    }

    updateAction(action){
        const alldiv = document.getElementById("board");
        for (let x =0; x<alldiv.children.length; x ++)
        {
        const div = alldiv.children[x];
        console.log(div.children.length)
        for (let y = 0; y<div.children.length; y++)
        {
            const a = div.children[y];
            a.addEventListener("click", () => {console.log(action(x,y), action);action(x,y) })
        }
        }
    }
}