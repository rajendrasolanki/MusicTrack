import { MusicTrackPage } from './app.po';

describe('music-track App', () => {
  let page: MusicTrackPage;

  beforeEach(() => {
    page = new MusicTrackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
