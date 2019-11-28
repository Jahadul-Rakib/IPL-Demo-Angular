import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamModule } from '../model/team.model';
import { PlayerModule } from '../model/player.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://localhost:8080';

  constructor(private _http: HttpClient) {

  }
  getAllTeam(){
    return this._http.get<TeamModule[]>(this.apiUrl +'/getallteam');
  }
  getTeamByID(id){
    return this._http.get<TeamModule>(this.apiUrl+'/getteam/'+id);
  }
  getAllPlayer(){
    return this._http.get<PlayerModule[]>(this.apiUrl +'/getallplayer');
  }
  getTeamPlayers(id){
    return this._http.get<PlayerModule[]>(this.apiUrl +'/getplayer/'+id);
  }
  createPlayer(player: PlayerModule): Observable<any>{
    return this._http.post(this.apiUrl+'/addplayer',player);
  }

}
