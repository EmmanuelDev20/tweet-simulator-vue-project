// import { v4 as uuidv4 } from "uuid"
import { v4 as uuidv4 } from "uuid"
import { TWEETS } from "../utils/constants"
import { size, remove } from "lodash"

export function saveTweetApi(tweet: string, username: string) {
  const tweets = getTweetsApi();
  // if(tweets.length === 0) {
  if(size(tweets) === 0) {
    const tweetTemp = [
      {
        id: uuidv4(),
        username,
        tweet,
        createdAt: new Date()
      }
    ]
    localStorage.setItem(TWEETS, JSON.stringify(tweetTemp))
  } else {
    const tweetTemp =
      {
        id: uuidv4(),
        username,
        tweet,
        createdAt: new Date()
      }
    tweets.push(tweetTemp)
    localStorage.setItem(TWEETS, JSON.stringify(tweets))
  }
  
}

export function getTweetsApi() {
  const tweets = localStorage.getItem(TWEETS)
  if(tweets) {
    return JSON.parse(tweets)
  }
  return []
}

export function deleteTweetApi(idTweet:number) {
  const tweets = getTweetsApi()
  // remove(tweets, (tweet: object) => {
  //   return tweet.id == idTweet
  // })
  // remove(tweets, function(tweet:object) {
  //   return tweet.id == idTweet
  // })

  localStorage.setItem(TWEETS, JSON.stringify(tweets))


}