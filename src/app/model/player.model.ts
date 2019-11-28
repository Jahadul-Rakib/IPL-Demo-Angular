import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamModule } from './team.model';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PlayerModule {
  "id":number;
  "playerName": string;
  "playerRenk": string;
  "playerNumber": number;
  "playerRuns": number;
  "playerTotalCentury": number;
  "playerTotalWicket": number;
  "team": TeamModule;
 }
