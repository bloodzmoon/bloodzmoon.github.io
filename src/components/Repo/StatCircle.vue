<script>
import Colors from '@/assets/gh-colors.json'
import { Doughnut } from 'vue-chartjs'

export default {
  name: 'StatCircle',
  extends: Doughnut,
  props: {
    repos: Array,
  },
  watch: {
    repos() {
      this.renderChart(this.chartData, this.options)
    },
  },
  computed: {
    chartData() {
      return {
        labels: this.labels,
        datasets: this.datasets,
      }
    },

    options() {
      return {
        legend: {
          position: 'right',
        },
        cutoutPercentage: 40,
        aspectRatio: 1,
      }
    },

    labels() {
      const langs = []
      for (const repo of this.repos) {
        if (!repo.language) continue
        if (!langs.includes(repo.language)) langs.push(repo.language)
      }
      return langs
    },

    datasets() {
      const d = { data: [], backgroundColor: [] }
      this.labels.forEach((label) => {
        const count = this.repos.filter((repo) => repo.language === label)
          .length
        d.data.push(count)
        d.backgroundColor.push(this.repoColor(label))
      })
      return [d]
    },
  },

  methods: {
    repoColor(language) {
      const color = Colors[language]?.color || '#26aefd'
      return color
    },
  },
}
</script>