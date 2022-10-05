import { Injectable } from '@angular/core';
import { IDiscount } from '../../interfaces/discount/discount.interface';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  private discounts: Array<IDiscount> = [
    {
      id: 1,
      description: `«LA П’ЄЦ» турбується про своїх клієнтів. Львів – велике і сучасне місто, тому ми стараємось цінувати Ваш час так само, як цінуєте його Ви. Наша доставка завжди з’являється біля ваших дверей вчасно. Якщо ні – замовник отримує промокод на безкоштовну піцу до наступного замовлення **.`,
      imagePath: 'https://la.ua/wp-content/uploads/2021/08/1-1-1.jpg'
    }
  ];

  constructor() { }

  getDiscounts(): Array<IDiscount> {
    return this.discounts;
  }

  addDiscount(discount: IDiscount): void {
    this.discounts.push(discount);
  }

  updateDiscount(discount: IDiscount, id: number): void {
    const index = this.discounts.findIndex(discount => discount.id === id);
    this.discounts.splice(index, 1, discount);
  }

  deleteDiscount(id: number): void {
    const index = this.discounts.findIndex(discount => discount.id === id);
    this.discounts.splice(index, 1);
  }
}
