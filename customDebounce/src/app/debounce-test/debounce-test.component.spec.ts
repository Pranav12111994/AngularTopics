import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceTestComponent } from './debounce-test.component';

describe('DebounceTestComponent', () => {
  let component: DebounceTestComponent;
  let fixture: ComponentFixture<DebounceTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebounceTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
