import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactsService {

    constructor(private http: HttpClient) { }

    fetchList(start: number = 0, pageSize: number = 10) {
        return this.http.post(
            'https://api.ngbook.techzto.com/people',
            {start, pageSize}
        );
    }
}
