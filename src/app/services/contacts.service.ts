import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/map';

const PAGE_SIZE = 10;

@Injectable()
export class ContactsService {

    constructor(private http: HttpClient) { }

    // pageNo starts from 0
    fetchList(pageNo: number = 0) {
        const start = pageNo * PAGE_SIZE;
        const pageSize = PAGE_SIZE;
        return this.http.post(
            'https://api.ngbook.techzto.com/people',
            {start, pageSize}
        ).pipe(
            map((data: any) => data.data && data.data.list || [])
        );
    }
}
