import { AceleratoPage } from './app.po';

describe('acelerato App', () => {
  let page: AceleratoPage;

  beforeEach(() => {
    page = new AceleratoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
