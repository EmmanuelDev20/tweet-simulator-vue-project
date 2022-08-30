<template>
    <navbar :openCloseForm="openCloseForm" :showForm="showForm" />
    <tweet-form 
      :showForm="showForm"
      :openCloseForm="openCloseForm"
      :reloadTweets="reloadTweets"
    />
    <tweet-list :tweets="tweets" />
</template>

<script lang="ts">
import { ref } from 'vue'
import Navbar from './components/Navbar.vue';
import TweetForm from './components/TweetForm.vue';
import TweetList from './components/TweetList.vue';
import useFormTweet from './hooks/useFormTweet';
import { getTweetsApi } from './api/tweet';

export default {
  name: "App",
  setup() {
    let tweets = ref( getTweetsApi().reverse() )

    const reloadTweets = () => {
      tweets.value = getTweetsApi().reverse();
    }

    return {
      ...useFormTweet(),
      tweets,
      reloadTweets
    };
  },
  components: {
    Navbar,
    TweetForm,
    TweetList
  },

}

</script>

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
