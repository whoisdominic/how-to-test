import { HttpClient } from './HttpClient';

describe('Http Client', () => {
  const client = new HttpClient('https://www.google.com');

  test('should be defined', () => {
    expect(client).toBeDefined();
  });

  test('instance should be truthy', () => {
    expect(client['instance']).toBeTruthy();
  });
});
