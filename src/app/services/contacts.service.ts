import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/map';

@Injectable()
export class ContactsService {

    constructor(private http: HttpClient) { }

    fetchList(start: number = 0, pageSize: number = 10) {
        return this.http.post(
            'https://api.ngbook.techzto.com/people',
            {start, pageSize}
        ).pipe(
            map((data: any) => data.data && data.data.list || [])
        );
    }
}
