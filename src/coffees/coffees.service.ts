import { Injectable } from '@nestjs/common';
import { coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: coffee[] = [
    {
      id: 1,
      name: 'Cappuccino',
      brand: 'Starbucks',
      flavors: ['Coffee, Milk, Sugar'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    return this.coffees.find((item) => item.id === +id);
  }
}
