
<template>
  <div id="index">

    <custom-header></custom-header>
    <router-view></router-view>
    <custom-footer v-show="$route.path !== '/'"></custom-footer>

  </div>
</template>

<script>

import customHeader from './components/Header'
import customFooter from './components/Footer'

export default {
  components: {
    'custom-header': customHeader,
    'custom-footer': customFooter
  }
}
</script>
