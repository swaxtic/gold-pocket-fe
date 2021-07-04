import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DateformatPipe } from 'src/app/shared/pipes/date-format/dateformat.pipe';

import { UserTransactionsComponent } from './user-transactions.component';

describe('UserTransactionsComponent', () => {
  let component: UserTransactionsComponent;
  let fixture: ComponentFixture<UserTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTransactionsComponent, DateformatPipe],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
