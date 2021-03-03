<template>
  <div class="home">
    <PremierLeague />
  </div>
</template>

<script>
import axios from 'axios'

const headers = {
          'x-rapidapi-key': '1400b770c5mshfa856d5cb1479f4p10da96jsn1c92f76f0fdc',
          'x-rapidapi-host': 'heisenbug-premier-league-live-scores-v1.p.rapidapi.com',
          'useQueryString': true
      }

// @ is an alias to /src
import PremierLeague from '@/components/PremierLeague'

export default {
  name: 'Home',
  components: {
    PremierLeague
  },
  methods: {
    setLeagueTable() {
      axios.get('https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table', { headers })
      .then(response => this.$store.dispatch('setLeagueTable', response.data.records))
    }
  },
  mounted() {
    this.setLeagueTable()
  }
}
</script>
