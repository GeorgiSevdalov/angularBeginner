import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/*interface LeadData {
  id
  title: string;
  next_activity: string;
  labels: string;
  source: string;
  lead_created: string;
  owner: string;
}

const ELEMENT_DATA: LeadData[] = [
  { title: 'example title', next_activity: 'chase', labels: 'Cold', source: 'Sales meister', lead_created: '20.05.2022', owner: 'George' },
  { title: 'example title', next_activity: 'base', labels: 'Hot', source: 'Sales meister', lead_created: '21.06.2022', owner: 'George' },
  { title: 'example title', next_activity: 'sase', labels: 'Cold', source: 'Sales meister', lead_created: '22.07.2022', owner: 'George' },
  { title: 'example title', next_activity: 'fase', labels: 'Warm', source: 'Sales meister', lead_created: '23.08.2022', owner: 'George' },
  { title: 'example title', next_activity: 'mase', labels: 'Warm', source: 'Sales meister', lead_created: '24.09.2022', owner: 'George' }
]*/