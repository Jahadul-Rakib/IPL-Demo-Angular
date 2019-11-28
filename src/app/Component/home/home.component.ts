import { Component, OnInit } from '@angular/core';
import { TeamModule } from 'src/app/model/team.model';
import { DataService } from 'src/app/Service/data.service';
import { PlayerModule } from 'src/app/model/player.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id: number;
  tesam: TeamModule[]; 
  player: PlayerModule[];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.getteam();
    this.getplayer();

  }

  getteam(){
    return this.dataservice.getAllTeam()
    .subscribe(data => this.tesam = data);
  }
  getplayer(){
    return this.dataservice.getAllPlayer()
    .subscribe(data => this.player = data);
  }
  getPlayers(id){
    return this.dataservice.getTeamPlayers(id)
    .subscribe(data => this.player = data);
  }

}
