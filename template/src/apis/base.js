import IO from '@/IOs';

const config = [
  {
    name: 'login',
    url: '/tokens',
    method: 'POST',
  },
  {
    name: 'mock',
    url: 'https://www.easy-mock.com/mock/5acdce3c493fb7245688f209/example/cli/{id}/test',
    method: 'GET',
    noPre: true
  }
]

const api = new IO();

export default api.scope({
  config,
  urlPrefix: '/api'
});