import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemFormComponent } from './project-item-form.component';

describe('ProjectItemFormComponent', () => {
  let component: ProjectItemFormComponent;
  let fixture: ComponentFixture<ProjectItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectItemFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
