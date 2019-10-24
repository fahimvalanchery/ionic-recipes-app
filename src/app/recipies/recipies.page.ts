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
  ngOnInit() {
    this.recipies = [];
  }
  ionViewWillEnter() {
    this.recipies = this.recipieService.getAllRecipies();
    if (!this.recipies.length) {
      setTimeout(() => {
        this.recipies = this.recipieService.getAllRecipies();
      }, 5000);
    }
  }
}
