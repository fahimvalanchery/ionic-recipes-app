import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {
  private recipies: Recipe[] = [
    {
      id: 'r1',
      title: 'Recipie 1',
      imageUrl: 'https://picsum.photos/200',
      ingredients: ['ing1 of r1', 'ing2 of r1']
    },
    {
      id: 'r2',
      title: 'Recipie 2',
      imageUrl: 'https://picsum.photos/400',
      ingredients: ['ing1 of r2', 'ing2 of r2']
    }
  ];
  constructor() {}
  getAllRecipies() {
    return [...this.recipies];
  }
  getRecipie(recipieId: string) {
    return {
      ...this.recipies.find(recipie => {
        return recipie.id === recipieId;
      })
    };
  }
}
