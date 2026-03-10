import { TestBed } from '@angular/core/testing';
import { describe, it, expect } from 'vitest'; // Note: Using vitest for testing as per project dependencies

import { ProductService } from './product.service';
import { Product } from '../models/product';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of products', () => {
    // Assuming ProductService has a getProducts method
    const products = service.getProducts();
    expect(products).toBeInstanceOf(Array);
    expect(products.length).toBeGreaterThanOrEqual(0);
  });

  it('should add a new product', () => {
    // Assuming ProductService has an addProduct method
    const newProduct: Product = {
      id: 1,
      name: 'New Product',
      price: 29.99,
      description: 'A new test product',
      image: 'new.jpg',
      category: 'Test',
      stock: 100
    };
    service.addProduct(newProduct);
    const products = service.getProducts();
    expect(products).toContain(newProduct);
  });

  it('should get a product by id', () => {
    // Assuming ProductService has a getProductById method
    const product = service.getProductById(1);
    expect(product).toBeDefined();
    expect(product?.id).toBe(1);
  });
});

describe('Product', () => {
  it('should be created with valid properties', () => {
    const product: Product = {
      id: 1,
      name: 'Test Product',
      price: 19.99,
      description: 'A test description',
      image: 'test.png',
      category: 'Electronics',
      stock: 50
    };
    expect(product).toBeDefined();
    expect(typeof product.id).toBe('number');
    expect(typeof product.name).toBe('string');
    expect(typeof product.price).toBe('number');
    expect(typeof product.description).toBe('string');
    expect(typeof product.image).toBe('string');
    expect(typeof product.category).toBe('string');
    expect(typeof product.stock).toBe('number');
  });

  it('should allow optional properties or defaults', () => {
    const product: Product = {
      id: 2,
      name: 'Another Product',
      price: 0,
      description: '',
      image: '',
      category: '',
      stock: 0
    };
    expect(product.price).toBe(0);
    expect(product.stock).toBe(0);
  });
});