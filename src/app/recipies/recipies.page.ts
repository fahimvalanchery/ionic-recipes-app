import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipiesService } from './recipies.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss']
})
export class RecipiesPage implements OnInit {
  constructor(private recipieService: RecipiesService) {}
  recipies: Recipe[];
  ngOnInit() {}
  ionViewWillEnter() {
    this.recipies = this.recipieService.getAllRecipies();
  }
}
