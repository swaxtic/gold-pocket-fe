import { TestBed } from '@angular/core/testing';
import { DateformatPipe } from './dateformat.pipe';

describe('DateformatPipe', () => {

  let pipe: DateformatPipe;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateformatPipe],
      providers: [DateformatPipe]
    });
    pipe = TestBed.inject(DateformatPipe);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should output "Kamis, 08 Juli 2021"', () => {
    const result = pipe.transform(new Date());
    expect(result).toEqual("Kamis, 08 Juli 2021");
  })

});
