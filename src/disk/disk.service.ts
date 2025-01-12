import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService){

    }

    getData(id: string): string{
        console.log('Inserting data in memory', id);
        return 'data!!'
    }
    insertInMemory(data: string): void{
        console.log('Inserting data in memory', data);
        this.powerService.suppyPower(5)
    }
}
