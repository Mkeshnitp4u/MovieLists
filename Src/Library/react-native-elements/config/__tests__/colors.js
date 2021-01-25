import { colors, colorsDark } from '../index';

describe('Color', () => {
  it('Colors (Light) should exist', () => {
    expect(colors).not.toBe(null);
  });
  it('Colors (Dark) should exist', () => {
    expect(colorsDark).not.toBe(null);
  });
});
