import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-instruction',
  templateUrl: './game-instruction.component.html',
  styleUrl: './game-instruction.component.scss'
})
export class GameInstructionComponent {
  cardActions = [
    { title: 'Waterfall', description: 'Starting with the player who drew the card, every player has to continually drink their drink. You can only stop when the person to their right has stopped drinking.' },
    { title: 'You', description: 'the player who drew the card picks someone to drink.' },
    { title: 'Me', description: 'the player who drew the card drinks.' },
    { title: 'Female', description: 'All those who identify as female drink.' },
    { title: 'Thumbmaster', description: 'the player who drew the card must put their thumb on the table at a chosen time (before the next five gets picked though, or they lose the right). The last person to put their thumb on the table must drink. In Perfect Match, Francesca says five is jive, where the player has to do a dance move, which is a fun variation too.' },
    { title: 'Male', description: 'All those who identify as male drink.' },
    { title: 'Heaven', description: 'the player who drew the card must point to the sky (at any chosen time before the next 7 is drawn). The last person who points to the sky must drink.' },
    { title: 'Mate', description: 'the player who drew the card picks a drinking mate, who must drink every time they drink. As a secondary rule, you can decide whether that means you always have to drink when they drink, too.' },
    { title: 'Rhyme', description: 'the player who drew the card says a word, and you go around the circle rhyming with that word until someone messes up, and has to drink.' },
    { title: 'Categories', description: 'the player who drew the card thinks of a category (e.g. dogs, cars, types of alcohol), and you go around the circle naming words in that category until someone messes up, and has to drink.' },
    { title: 'Jack', description: "Make a rule. The player who drew the card makes a new rule (e.g. you can't say the word 'yes' or you can't put your drink down) and anyone who breaks the rule at any time throughout the rest of the game has to drink." },
    { title: 'Queen', description: 'Question master. You become the question master, and if anybody answers a question asked by you (the player who drew the card), they have to drink. This applies to ANY question.' },
    { title: 'King', description: 'the player who drew the card must pour some of their drink into the cup in the middle. The person to draw the last King has to drink whatever is in the cup in the middle.' }
  ];
  currentTitle = '';
  currentDescription = '';
  @Input() card: string = '';
}
