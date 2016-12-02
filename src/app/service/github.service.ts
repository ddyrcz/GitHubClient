import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../model/user';
import { Repo } from '../model/repo';
import { Observable } from 'rxjs';

@Injectable()
export class GithubService {

    private _githubApi: string = 'https://api.github.com';

    constructor(private http: Http) {
    }

    getUser(login): Observable<User> {
        return this.http.get(`${this._githubApi}/users/${login}`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getRepos(login : string) : Observable<Repo[]>{
        return this.http.get(`${this._githubApi}/users/${login}/repos`)
            .map((res : Response) => res.json())
    }
}