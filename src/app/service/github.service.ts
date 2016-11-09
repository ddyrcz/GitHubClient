import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../model/user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubService {


    constructor(private http: Http) {
    }

    get(query: string): Promise<User> {
        return this.http.patch('http://localhost:8000/api/cupboards/q1/release', null)
            .toPromise()
            .then(response => response.json().data as User)
            .catch(err => {
                return Promise.reject(err.message || err);
            })

    }
}