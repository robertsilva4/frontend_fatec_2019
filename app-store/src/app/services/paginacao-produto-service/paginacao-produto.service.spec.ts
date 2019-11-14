import { TestBed } from '@angular/core/testing';

import { PaginacaoProdutoService } from './paginacao-produto.service';

describe('PaginacaoProdutoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaginacaoProdutoService = TestBed.get(PaginacaoProdutoService);
    expect(service).toBeTruthy();
  });
});
