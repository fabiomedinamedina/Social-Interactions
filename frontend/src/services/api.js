import { api } from './config'

export default {
  getLoginTw: () => api.get('/tw/success'),
  getTimeline: params => api.get('/tw/timeline', { params }),
  getLogOutTw: () => api.get('/tw/logout'),
  postTweet: data => api.post('/tw/tweet', data)
}