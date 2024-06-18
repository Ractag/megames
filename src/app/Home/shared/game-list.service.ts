import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameListService {
  constructor(private http: HttpClient) {}

  private readonly BASE_URL = 'http://localhost:8080/games/';

  // Fetch games
  getAllGames$(): Observable<any> {
    return this.http.get(`${this.BASE_URL}get/all`).pipe(
      catchError((err) => {
        throw console.error(err);
      }),
    );
  }
}
