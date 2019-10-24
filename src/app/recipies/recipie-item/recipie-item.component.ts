import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.scss']
})
export class RecipieItemComponent implements OnInit {
  @Input() recipieItem: Recipe;
  constructor() {}

  ngOnInit() {}
}
