import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { USER } from './mock-user';

@Injectable()
export class GithubService {
    get(query: string): User {
        return USER;
    }
}