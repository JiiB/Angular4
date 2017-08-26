import { ChatAppFirebasePage } from './app.po';

describe('chat-app-firebase App', () => {
  let page: ChatAppFirebasePage;

  beforeEach(() => {
    page = new ChatAppFirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
