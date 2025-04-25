import { Tile } from "../Tile/Tile";
import "./Chessboard.css";

// Black pieces
import pawnBlack from "../../assets/img/pawn_b.png";
import rookBlack from "../../assets/img/rook_b.png";
import knightBlack from "../../assets/img/knight_b.png";
import bishopBlack from "../../assets/img/bishop_b.png";
import queenBlack from "../../assets/img/queen_b.png";
import kingBlack from "../../assets/img/king_b.png";

// White pieces
import pawnWhite from "../../assets/img/pawn_w.png";
import rookWhite from "../../assets/img/rook_w.png";
import knightWhite from "../../assets/img/knight_w.png";
import bishopWhite from "../../assets/img/bishop_w.png";
import queenWhite from "../../assets/img/queen_w.png";
import kingWhite from "../../assets/img/king_w.png";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const pieces = [];

// Initialize pieces using loop
for (let playerIndex = 0; playerIndex < 2; playerIndex++) {
  const isBlack = playerIndex === 0;
  const pieceColor = isBlack ? "black" : "white";
  const mainRow = isBlack ? 0 : 7;
  const pawnRow = isBlack ? 1 : 6;

  // Add main pieces
  pieces.push({ image: isBlack ? rookBlack : rookWhite, x: 0, y: mainRow });
  pieces.push({ image: isBlack ? knightBlack : knightWhite, x: 1, y: mainRow });
  pieces.push({ image: isBlack ? bishopBlack : bishopWhite, x: 2, y: mainRow });
  pieces.push({ image: isBlack ? queenBlack : queenWhite, x: 3, y: mainRow });
  pieces.push({ image: isBlack ? kingBlack : kingWhite, x: 4, y: mainRow });
  pieces.push({ image: isBlack ? bishopBlack : bishopWhite, x: 5, y: mainRow });
  pieces.push({ image: isBlack ? knightBlack : knightWhite, x: 6, y: mainRow });
  pieces.push({ image: isBlack ? rookBlack : rookWhite, x: 7, y: mainRow });

  // Add pawns
  for (let columnIndex = 0; columnIndex < 8; columnIndex++) {
    pieces.push({
      image: isBlack ? pawnBlack : pawnWhite,
      x: columnIndex,
      y: pawnRow,
    });
  }
}

export const Chessboard = () => {
  let board = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = i + j + 2;
      let image = undefined;

      pieces.forEach((piece) => {
        if (piece.x === i && piece.y === j) {
          image = piece.image;
        }
      });

      board.push(
        <Tile
          key={`${i}-${j}`}
          className={number % 2 === 0 ? "white-tile" : "black-tile"}
          src={image}
        />
      );
    }
  }

  return <div id="chessboard">{board}</div>;
};
