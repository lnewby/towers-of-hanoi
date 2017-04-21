const PuzzleBoard = ({pegs}) => {
  const canvas = document.getElementById('hanoiCanvas');
  const ctx = canvas.getContext('2d');

  const drawTower = () => {
    pegs.map((peg) => {
      peg.torusStack.map((torus, i) => {
        ctx.fillStyle = torus.color;
        ctx.fillRect(canvas.width/2+(i*10), canvas.height-(i*10), 105-(i*20), 10);
      });
    });
  }

  drawTower();

  document.body.appendChild(canvas);
}

export default PuzzleBoard;
