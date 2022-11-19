import Redis from 'ioredis'

let client;

class RedisClient {
  static getInstance() {
      if (client) {
          return client
      } 

      client = new Redis(process.env.REDIS_URL || '')
      return client
  }
}

export default RedisClient



