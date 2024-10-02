import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/user', () => {
    return HttpResponse.json({ username: 'John Maverick', age: 18 });
  }),
];
