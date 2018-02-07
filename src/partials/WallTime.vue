<template>
  <div>{{ prettyMinutes }}:{{ prettySeconds }}</div>
</template>

<script>
export default {
  name: 'WallTime',
  data: () => ({
    seconds: 0,
    minutes: 0,
  }),
  computed: {
    prettySeconds: function moo() {
      return this.prettyTime(this.seconds);
    },
    prettyMinutes: function moo() {
      return this.prettyTime(this.minutes);
    },
  },
  mounted() {
    setInterval(() => {
      this.seconds = this.seconds + 1;
      if (this.seconds === 60) {
        this.minutes = this.minutes + 1;
        this.seconds = 0;
      }
      const { seconds, minutes } = this;
      this.$store.dispatch('updateTime', {
        seconds, minutes,
      });
    }, 1000);
  },
  methods: {
    prettyTime(input) {
      return input <= 9
        ? `0${input}`
        : `${input}`;
    },
  },
};
</script>

<style scoped>

</style>
