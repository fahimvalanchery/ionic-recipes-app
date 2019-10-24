import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipiesService } from '../recipies.service';
import { Recipe } from '../recipe.model';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.page.html',
  styleUrls: ['./recipie-detail.page.scss']
})
export class RecipieDetailPage implements OnInit {
  loadedRecipie: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipieService: RecipiesService,
    private navController: NavController,
    private router: Router,
    private alertCntrl: AlertController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipieId')) {
        this.router.navigate(['/recipies']);
        return;
      }
      const recipieId = paramMap.get('recipieId');
      this.loadedRecipie = this.recipieService.getRecipie(recipieId);
      console.log('this.loadedRecipie');
      console.log(this.loadedRecipie);
    });
  }

  onDeleteRecipie() {
    this.alertCntrl
      .create({
        header: 'DELETE',
        message: 'Do you Want to Delete?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Delete',
            handler: () => {
              this.recipieService.deleteRecipie(this.loadedRecipie.id);
              this.navController.navigateBack(['/recipies']);
            }
          }
        ]
      })
      .then(e => {
        e.present();
      });
  }
}
