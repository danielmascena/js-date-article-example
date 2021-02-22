<template>
  <article>
    <h2>{{dateMonth.toString().slice(3,7)}}</h2>
    <ul class="month">
      <li v-for="(day, index) in getDays" :key="index" class="days">
        {{day}}
      </li>
    </ul>
  </article>
</template>

<script>
//import DateItem from './DateItem';

export default {
  props: {
    dateToPresent: {
      type: Date,
      required: true
    }
  },
  data() {
    return {
      dateMonth: this.dateToPresent
    }
  },
  computed: {
    getDays() {
      return Array.from(
        {length:(
          (new Date(
            this.dateToPresent.getFullYear(),
            this.dateToPresent.getDate()+1,
            0)
          ).getDate()-1)},
        (_, i) => i + 1
      );
    }
  }

};
</script>

<style lang="scss" scoped>
  .month {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    margin: 0;
    justify-content: space-between;
  }
  .days {
    flex-basis: 30px;
  }

</style>
