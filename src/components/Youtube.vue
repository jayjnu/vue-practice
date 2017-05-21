<template>
  <article class="youtube-article">
    <loading-icon v-bind:visible="!loaded"></loading-icon>
    <div class="wrap-playlist">
      <ul class="list-playlist">
        <li v-for="item in playList">
          <router-link :to="'youtube/' + item.playlistId" title="" class="link-playlist">
            <div class="wrap-thumb"><img :src="item.thumbnails.high.url" alt="" class="thumb-playlist"></div>
            <strong>{{item.title}}</strong>
          </router-link>
        </li>
      </ul>
    </div>
  </article>
</template>
<script>
  import loadApi from '../libs/loadApi'
  import LoadingIcon from './Loading.vue'

  const parseResponse = (res) => res.json()
  const showRes = (res) => { console.log(res); return res }
  const refineData = (res) => {
    res.refinedData = res.items.map((item) => {
      const snippet = item.snippet
      return {
        title: snippet.title,
        thumbnails: snippet.thumbnails,
        playlistId: item.id.playlistId,
        channelId: snippet.chanelId
      }
    }).filter((item) => {
      return !!item.playlistId
    })
    return res
  }
  const handleError = (res) => {
    if (res.error && res.error.code === 403) {
      alert(res.error.message)
    } else if (!res.items) {
      alert(res)
    }
    return res
  }
  const updateData = function (res) {
    this.playList = res.refinedData
    this.loaded = res.refinedData.length > 0
    this.nextPageToken = res.nextPageToken
    return res
  }

  export default {
    name: 'youtube-playlist',
    components: { LoadingIcon },
    data () {
      return {
        playList: [],
        nextPageToken: '',
        loaded: false
      }
    },
    created () {
      const urlParams = {
        key: 'AIzaSyBS5ZXnl6pKhBP-XSoHaiXGAnxbGMRtZTU',
        part: 'snippet',
        channelId: 'UC_ApA6bsQ2Fgbf1pAReKaYw'
      }
      loadApi('https://www.googleapis.com/youtube/v3/search', urlParams)
        .then(parseResponse)
        .then(handleError)
        .then(showRes)
        .then(refineData)
        .then(updateData.bind(this))
        .catch(handleError)
    }
  }

</script>
<style>
  .youtube-article {padding-top: 20px}
  .wrap-playlist {overflow: auto; width: 100%;}
  .list-playlist {display: flex; align-items: center;}
  .list-playlist li {width: 200px; height: 100%; overflow: hidden;padding: 20px 10px; flex-shrink:0; background-color: #f0f0f0;}
  .list-playlist .wrap-thumb {width: 100%; height: 150px;}
  .list-playlist .thumb-playlist {width:auto; height:100%; display:block; margin:0 auto}
  .link-playlist {display: block}
</style>
