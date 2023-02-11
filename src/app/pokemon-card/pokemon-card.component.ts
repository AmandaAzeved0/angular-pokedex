import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input()
  pokemon: string | undefined;

  @Input()
  id : number | undefined;

  getImage(){
    const idFormatt = this.leadingZero(this.id);
    return 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+idFormatt+'.png'
  }

  leadingZero(str: number | undefined, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
}
