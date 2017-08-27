import { TaskmanagerPage } from './app.po';

describe('taskmanager App', () => {
  let page: TaskmanagerPage;

  beforeEach(() => {
    page = new TaskmanagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
