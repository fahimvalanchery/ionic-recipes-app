import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss']
})
export class RecipiesPage implements OnInit {
  recipies: Recipe[] = [
    {
      id: 'r1',
      title: 'Recipie 1',
      imageUrl: 'https://picsum.photos/200',
      ingredients: ['ing1 of r1', 'ing2 of r1']
    },
    {
      id: 'r2',
      title: 'Recipie 2',
      imageUrl: 'https://picsum.photos/200',
      ingredients: ['ing1 of r2', 'ing2 of r2']
    }
  ];

  constructor() {}

  ngOnInit() {}
}
