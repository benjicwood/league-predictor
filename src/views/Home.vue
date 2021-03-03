<template>
  <div class="home">
    <PremierLeague />
  </div>
</template>

<script>
// @ is an alias to /src
import PremierLeague from '@/components/PremierLeague'

export default {
  name: 'Home',
  components: {
    PremierLeague
  }
}
</script>
