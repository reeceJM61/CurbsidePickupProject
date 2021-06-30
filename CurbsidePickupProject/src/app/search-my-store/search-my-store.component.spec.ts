import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMyStoreComponent } from './search-my-store.component';

describe('SearchMyStoreComponent', () => {
  let component: SearchMyStoreComponent;
  let fixture: ComponentFixture<SearchMyStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMyStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMyStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
