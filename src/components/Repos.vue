<template>
  <article class="repos-article">
    <loading-icon v-bind:visible="!loaded"></loading-icon>
    <ul class="list-repos">
      <li v-for="repo in repos">
        <a :href="repo.url" target="_blank" class="link-repos">
          <strong class="title-repos">{{repo.name}}</strong>
          stars: {{repo.stars}}<br/>
          watchers: {{repo.watchers}}
        </a>
      </li>
    </ul>
  </article>
</template>
<script>
  import loadApi from '../libs/loadApi'
  import LoadingIcon from './Loading.vue'

  const parse = (res) => res.json()
  const getRequiredDataOnly = (res) => {
    return res.map((each) => {
      return {
        name: each.name,
        url: each.html_url,
        language: each.language,
        stars: each.stargazers_count,
        watchers: each.watchers_count
      }
    })
  }
  const updateReposData = function (res) {
    this.repos = res
    this.loaded = this.repos.length > 0
    return res
  }
  const sortReposDataByStars = (res) => {
    return res.sort((a, b) => b.stars - a.stars)
  }
  const handleFetchError = (err) => {
    alert('error fetching api please try it again', err)
  }

  export default {
    name: 'repos',
    components: { LoadingIcon },
    data () {
      return {
        repos: [],
        loaded: false
      }
    },

    created () {
      loadApi('https://api.github.com/users/jayjnu/repos')
        .then(parse)
        .then(getRequiredDataOnly)
        .then(sortReposDataByStars)
        .then(updateReposData.bind(this))
        .catch(handleFetchError)
    }
  }
</script>
<style>
  .repos-article {
    width:100%;
    background-color: #f9f9f9;
  }
  .list-repos {overflow: hidden}
  .list-repos li {
    background-color: #fff;
    width: 50%;
    margin:20px auto;
  }
  .link-repos {
    display: block;
    font-size: 12px;
    text-decoration: none;
    text-align: left;
    color: #333;
  }
  .title-repos {
    color: #42C4C3;
    font-size: 16px;
    display:block;
    line-height: 2;
  }
</style>
