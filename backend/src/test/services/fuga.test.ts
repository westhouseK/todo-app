import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Fuga } from '../../entities/fuga';
import { FugaService } from '../../services/fuga.service';

describe('サンプルテスト', () => {
  let service: FugaService;

  const mockedRepo = {
    // mock the repo `findOne`
    findOne: jest.fn(() =>
      Promise.resolve(plainToClass(Fuga, { id: 1, name: 'Modesta' })),
    ),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FugaService,
        {
          provide: getRepositoryToken(Fuga),
          useValue: mockedRepo,
        },
      ],
    }).compile();
    service = await module.get(FugaService);
  });

  afterEach(() => jest.clearAllMocks());

  it('テストケース1', () => {
    expect(1 + 2).toBe(3);
  });

  it('テストケース2', async () => {
    const findOneSpy = jest.spyOn(mockedRepo, 'findOne');

    const fuga = await service.find(1);
    console.log(fuga);
    expect(fuga).toEqual({ id: 1, name: 'Modesta' });

    expect(findOneSpy).toHaveBeenCalledTimes(1);
    expect(findOneSpy).toHaveBeenCalledWith(1);
  });
});
