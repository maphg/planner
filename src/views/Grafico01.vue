<script>
import { defineComponent } from "vue";
import { Line } from "vue3-chart-v2";

export default defineComponent({
   name: "Grafico01",
   extends: Line,
   data() {
      return {
         state: {
            chartData: {
               labels: ["21 / 06", "22 / 06", "23 / 06", "24 / 06", "25 / 06", "26 / 06", "27 / 06"],
               datasets: [
                  {
                     label: "8 a 9",
                     data: [65, 59, 80, 81, 56, 55, 40],
                     fill: false,
                     borderColor: "rgba(255, 99, 132, 1)",
                     tension: 0.1,
                  },
                  {
                     label: "5 a 6",
                     data: [54, 86, 32, 90, 43, 75, 24],
                     fill: false,
                     borderColor: "rgba(54, 162, 235, 1)",
                     tension: 0.1,
                  },
               ],
            },
            chartOptions: {
               responsive: true,
               maintainAspectRatio: false,
            },
         },
      };
   },
   mounted() {
      this.renderChart(this.state.chartData, this.state.chartOptions);
   },
});
</script>
