import { TransportLayer } from './transportLayer';

describe('TransportLayer', () => {
  const client = new TransportLayer();

  test('should be defined', () => {
    expect(client).toBeDefined();
  });
});
