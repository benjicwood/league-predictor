<template>
  <div class="league-table">
    <p>Premier League Component</p>
    <button @click='clik'>hi</button>
    <div v-for="(team, index) in $store.state.leagueTable" :key="index">
      <ul>{{ team.team }}: {{ team.points }}</ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PremierLeague',
  // props: {
  //   league: {
  //     type: Object,
  //     required: true,
  //   }
  // },
  methods: {
    clik() {
      console.log(this.$store.state.leagueTable)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

</style>
