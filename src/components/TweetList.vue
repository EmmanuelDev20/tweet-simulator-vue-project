<template>
  <div class="container">
    <h1 class="text-center mb-4" v-if="tweets.length > 0">Lista de tweets</h1>
    <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
      <p class="tweet__title">{{ tweet.username }}</p>
      <p class="tweet__text">{{ tweet.tweet }}</p>
      <span>{{ formatdate(tweet.createdAt) }}</span>
      <p class="close" @click="">X</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref } from "vue"
  import { saveTweetApi } from "../api/tweet"
  import moment from "moment"
  import "moment/locale/es"
  import { defineComponent } from 'vue'
  

  export default defineComponent({
    name: "tweet-form",
    props: {
      tweets: Array
    },
    components: {
    },
    setup(props) {
      const formatdate = (date: Date) => {
        return moment(date).fromNow()
      }

      return {
        formatdate
      }
    }
  })

</script>

<style lang="scss" scoped>
  .tweet {
    position: relative;
    border: 3px solid #ccc;
    padding: 20px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
  
    p {
      margin: 0;
    }

    &__title {
      position: absolute;
      top: -12px;
      left: 10px;
      background-color: #fff;
      padding: 0 10px;
      font-weight: bold;
    }

    &__text {
      color: grey;
    }

    span {
      position: absolute;
      right: 20px;
      bottom: -9px;
      padding: 0 20px;
      font-size: 12px;
      color: grey;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 10px;
    }
  }

  .close {
    font-size: 12px;
    background-color: #198754;
    color: white;
    padding: .2rem .5rem;
    border-radius: 1rem;

    &:hover {
      cursor: pointer;
      background-color: #195700;
      color: white;
    }
  }
</style>