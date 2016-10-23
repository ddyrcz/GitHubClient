import { GitHubClientPage } from './app.po';

describe('git-hub-client App', function() {
  let page: GitHubClientPage;

  beforeEach(() => {
    page = new GitHubClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
