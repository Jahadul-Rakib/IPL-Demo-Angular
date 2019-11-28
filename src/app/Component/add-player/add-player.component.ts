import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/Service/data.service';
import { PlayerModule } from 'src/app/model/player.model';
import { TeamModule } from 'src/app/model/team.model';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  @Input()
  public set playerName(v: string) {
    this.player.playerName = v;
  }

  @Input()
  public set playerRenk(v: string) {
    this.player.playerRenk = v;
  }
  @Input()
  public set playerNumber(v: number) {
    this.player.playerNumber = v;
  }
  @Input()
  public set playerRuns(v: number) {
    this.player.playerRuns = v;
  }

  @Input()
  public set playerTotalCentury(v: number) {
    this.player.playerTotalCentury = v;
  }
  @Input()
  public set playerTotalWicket(v: number) {
    this.player.playerTotalWicket = v;
  }
  @Input()
  public set teamId(v: number) {
    this.teamID = v;
  }
  player = new PlayerModule();
  team: TeamModule[];
  oneTeam: TeamModule;
  teamID: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getteam();
  }

  getteam() {
    this.team = null;
    return this.dataService.getAllTeam()
      .subscribe(data => this.team = data);
  }
  addPlayer() {
    this.getTeamBID(this.teamId);
    console.log(this.teamId);
    if (window.confirm("OK")) {
      this.player.team = this.oneTeam;
      return this.dataService.createPlayer(this.player)
        .subscribe(data => this.player = data);
    }
  }
  getTeamBID(id: number) {
    return this.dataService.getTeamByID(id)
      .subscribe(data => this.oneTeam = data);
  }

}
