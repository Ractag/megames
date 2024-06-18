import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameListService {
  constructor(private http: HttpClient) {}

  // Fetch games
  getAllGames$(): Observable<any> {
    return this.http.get(`http://localhost:8080/games/get/all`).pipe(
      catchError((err) => {
        throw console.error(err);
      }),
    );
  }
}
