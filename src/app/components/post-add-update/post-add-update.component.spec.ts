import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAddUpdateComponent } from './post-add-update.component';

describe('PostAddUpdateComponent', () => {
  let component: PostAddUpdateComponent;
  let fixture: ComponentFixture<PostAddUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostAddUpdateComponent]
    });
    fixture = TestBed.createComponent(PostAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
