import { ScannedDocsPage } from './app.po';

describe('scanned-docs App', () => {
  let page: ScannedDocsPage;

  beforeEach(() => {
    page = new ScannedDocsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
