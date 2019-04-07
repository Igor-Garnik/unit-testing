import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent()
  });

  afterEach(() => { }); //executed after each test
  beforeAll(() => { }); //executed ones after all tests 
  afterAll(() => { }), //executed ones after all tests 

    it('should increment totalVotes when upVote', () => {
      component.upVote();

      expect(component.totalVotes).toBe(1);
    });

  it('should decrement totalWotes when downVote', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});