<script>
import Colors from '@/assets/gh-colors.json'
import { Bar } from 'vue-chartjs'

export default {
  name: 'StatBar',
  extends: Bar,
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
          display: false,
        },
        aspectRatio: 1,
      }
    },

    labels() {
      const langs = []
      for (const repo of this.mostStarred) {
        if (!repo.language) continue
        if (!langs.includes(repo.language)) langs.push(repo.language)
      }
      return langs
    },

    datasets() {
      const d = {
        data: [],
        backgroundColor: [],
      }
      this.labels.forEach((label) => {
        const repo = this.mostStarred.find((repo) => repo.language === label)
        d.data.push(repo.stargazers_count)
        d.backgroundColor.push(this.repoColor(label))
      })
      return [d]
    },

    mostStarred() {
      const sorted = [...this.repos]
      sorted.sort((a, b) => b.stargazers_count - a.stargazers_count)
      return sorted.slice(0, 5)
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