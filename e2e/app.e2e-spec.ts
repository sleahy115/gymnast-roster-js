import { GymRosterPage } from './app.po';

describe('gym-roster App', () => {
  let page: GymRosterPage;

  beforeEach(() => {
    page = new GymRosterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
