import { DefaultImagePipe } from '../assets/images/default-image.pipe';

describe('DefaultImagePipe', () => {
  it('create an instance', () => {
    const pipe = new DefaultImagePipe();
    expect(pipe).toBeTruthy();
  });
});
