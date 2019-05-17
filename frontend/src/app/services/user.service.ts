import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

 
  register(user)
  {
    console.log('donee');
    return this.http.post('users/register',user)
    .pipe(
      map(res=>JSON.parse(JSON.stringify(res)))
    )
  }

  getUsersData()
  {
    return this.http.get('users/getAll')
    .pipe(
      map(res=>JSON.parse(JSON.stringify(res)))
    );
  }

  deleteUser(id)
  {
    return this.http.post('users/delete',{_id:id})
    .pipe(
      map(res=>JSON.parse(JSON.stringify(res)))
    );

  }
 
}