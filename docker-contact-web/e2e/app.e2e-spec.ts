import { DockerContactWebPage } from './app.po';

describe('docker-contact-web App', () => {
  let page: DockerContactWebPage;

  beforeEach(() => {
    page = new DockerContactWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
