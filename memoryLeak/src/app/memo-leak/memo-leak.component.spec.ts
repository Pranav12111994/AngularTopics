import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoLeakComponent } from './memo-leak.component';

describe('MemoLeakComponent', () => {
  let component: MemoLeakComponent;
  let fixture: ComponentFixture<MemoLeakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoLeakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoLeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
