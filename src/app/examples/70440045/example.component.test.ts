import { ExampleComponent } from './example.component';

describe('70440045', () => {
  it('should post message on click', async () => {
    const component = new ExampleComponent();
    let postMessageSpy: jasmine.Spy<(message: any, targetOrigin: string, transfer?: Transferable[]) => void> = spyOn(
      window.parent,
      'postMessage',
    );
    component.navigateTo();
    expect(postMessageSpy).toHaveBeenCalledWith('NESTED_NAVIGATION', 'target_origin');
  });
});
