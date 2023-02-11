import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons = [];
  constructor(private httpClient : HttpClient) {
    this.carregarPokemons();
  }

  async carregarPokemons() {
     const req = await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=51').toPromise();
    this.pokemons =req.results;
  }
}
