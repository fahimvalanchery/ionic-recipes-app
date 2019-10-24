import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {
  private recipeCounter = 0;
  private startingRecipes = 2;
  private recipies: Recipe[] = [
    // {
    //   id: 'r1',
    //   title: 'Recipie 1',
    //   imageUrl: 'https://picsum.photos/200',
    //   ingredients: ['ing1 of r1', 'ing2 of r1']
    // },
    // {
    //   id: 'r2',
    //   title: 'Recipie 2',
    //   imageUrl: 'https://picsum.photos/400',
    //   ingredients: ['ing1 of r2', 'ing2 of r2']
    // }
  ];
  constructor() {
    this.generateRecipe(this.startingRecipes);
  }
  generateRecipe(n) {
    for (let i = 0; i < n; i++) {
      this.recipies.push(this.recipeFactory());
    }
  }
  recipeFactory() {
    this.recipeCounter++;
    return {
      id: 'r' + this.recipeCounter,
      title: 'Recipie ' + this.recipeCounter,
      imageUrl: 'https://picsum.photos/' + (100 + this.recipeCounter),
      ingredients: Array((Math.random() * 100) % 10 | 0)
        .fill(0)
        .map((item, index) => {
          return (
            'Ingredient ' + index + ' of ' + 'recipe r' + this.recipeCounter
          );
        })
    };
  }
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
  deleteRecipie(recipieId: string) {
    this.recipies = this.recipies.filter(recipie => {
      return recipie.id !== recipieId;
    });
    if (!this.recipies.length) {
      setTimeout(() => {
        this.generateRecipe(5);
      }, 5000);
    }
  }
}
