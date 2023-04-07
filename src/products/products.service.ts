import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.module';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(name: string, description: string, price: number): string {
    const id = new Date().toISOString();
    const newProduct = new Product(id, name, description, price);
    this.products.push(newProduct);
    return id;
  }

  getProducts(): Product[] {
    return [...this.products];
  }

  getProduct(productId: string): Product {
    const product = this.products.find((prod) => prod.id === productId);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return { ...product };
  }

  updateProduct(
    id: string,
    name: string,
    description: string,
    price: number,
  ): void {
    const [product, index] = this.findProduct(id);
    const updatedProduct = { ...product };
    if (name) {
      updatedProduct.name = name;
    }
    if (description) {
      updatedProduct.description = description;
    }
    if (price) {
      updatedProduct.price = price;
    }
    this.products[index] = updatedProduct;
  }

  deleteProduct(prodId: string): void {
    const index = this.findProduct(prodId)[1];
    this.products.splice(index, 1);
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return [product, productIndex];
  }
}
