import { TransportLayer } from './transportLayer';

describe('TransportLayer', () => {
  const mockTransportLayer = new TransportLayer();

  test('should be defined', () => {
    expect(mockTransportLayer).toBeDefined();
  });
});
