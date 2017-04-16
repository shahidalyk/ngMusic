import { NgMusicPage } from './app.po';

describe('ng-music App', () => {
  let page: NgMusicPage;

  beforeEach(() => {
    page = new NgMusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
