import { Component, inject } from '@angular/core';
import { GetProductsService } from '../get-products.service';
import { IProduct } from '../iproduct';
import { isArray } from 'util';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  DataProducts: IProduct[]=[];
  private readonly _GetProductsService=inject(GetProductsService)
  ngOnInit(): void {
    this._GetProductsService.getProd().subscribe({
      next: (res) => {
        this.DataProducts = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
