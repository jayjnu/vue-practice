<template>
  <header class="header">
    <h1 class="header-title">Vue.js practice</h1>
    <nav>
      <ul class="header-gnb">
        <li v-for="link in links">
          <router-link v-bind:to="link.to" class="gnb-item">{{ link.text }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
  class LinkTo {
    constructor (text, to) {
      this.text = text
      this.to = to || `/${text}`
    }
  }
  export default {
    name: 'header-gnb',
    data () {
      return {
        path: this.$route.name,
        links: [ new LinkTo('repos', '/'), new LinkTo('youtube'), new LinkTo('bar') ]
      }
    }
  }
</script>
<style>
  .header-title { padding: 30px 0; font-weight: normal; font-size: 36px; }
  .header-gnb:after {content: '';display:block;clear:both}
  .header-gnb li {list-style:none;float:left;width:33.3%}
  .header-gnb .gnb-item {text-transform: capitalize; display:block;height:100%;padding:20px 0;text-decoration: none;color:#333}
  .router-link-exact-active {background-color: #eee}
</style>
