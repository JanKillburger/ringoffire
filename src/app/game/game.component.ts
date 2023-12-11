import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { Firestore, onSnapshot, doc, addDoc, collection, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {

  game: Game = new Game();
  gameId: string = '';

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private firestore: Firestore) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.gameId = params['id'];
      const unsubGame = onSnapshot(
        doc(this.firestore, "games", this.gameId),
        (currentGame: any) => {
          this.game.currentPlayer = currentGame.data().currentPlayer;
          this.game.playedCards = currentGame.data().playedCards;
          this.game.players = currentGame.data().players;
          this.game.stack = currentGame.data().stack;
          this.game.pickCardAnimation = currentGame.data().pickCardAnimation;
          this.game.currentCard = currentGame.data().currentCard;
        }
      );
    })
  }

  saveGame() {
    updateDoc(doc(this.firestore, "games", this.gameId), this.game.toJson());
  }

  takeCard() {
    if (!this.game.pickCardAnimation) {
      this.game.currentCard = this.game.stack.pop()!;
      this.game.pickCardAnimation = true;
      this.game.currentPlayer == this.game.players.length - 1 ? this.game.currentPlayer = 0 : this.game.currentPlayer++;
      this.saveGame();
      setTimeout(() => {
        this.game.playedCards.push(this.game.currentCard);
        this.game.pickCardAnimation = false;
        this.saveGame();
      }, 750);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    dialogRef.afterClosed().subscribe(name => {
      if (name != undefined) this.game.players.push(name);
      this.saveGame();
    });
  }
}