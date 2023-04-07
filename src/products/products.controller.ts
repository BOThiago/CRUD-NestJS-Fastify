import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.module';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('name') prodName: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): { id: string } {
    const generatedId = this.productsService.insertProduct(
      prodName,
      prodDesc,
      prodPrice,
    );
    return { id: generatedId };
  }

  @Get()
  getAllProducts(): Product[] {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string): Product {
    return this.productsService.getProduct(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('name') prodName: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): void {
    this.productsService.updateProduct(prodId, prodName, prodDesc, prodPrice);
  }

  @Delete(':id')
  removeProduct(@Param('id') prodId: string): void {
    this.productsService.deleteProduct(prodId);
  }
}
