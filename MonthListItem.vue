<template>
  <article class="month-container" role="table">
    <h2>{{dateToPresent.toString().slice(3,7)}}</h2>
    <div class="month" role="rowgroup">
      <span v-for="(day, index) in getDays" :key="index" class="day" role="cell">
        {{day}}
      </span>
    </div>
  </article>
</template>

<script>
//import DateItem from './DateItem';

export default {
  props: {
    dateToPresent: {
      type: Date,
      required: true
    },
    selectedDay: {
      type: Number,
      default: 0
    }
  },
  computed: {
    getDays() {
      return Array.from(
        {length:(
          (new Date(
            this.dateToPresent.getFullYear(),
            this.dateToPresent.getMonth()+1,
            0)
          ).getDate())},
        (_, i) => i + 1
      );
    }
  }

};
</script>

<style lang="scss" scoped>
  .month-container {
    width: 50%;
  }

  .month {
    display: grid;
    grid-template-columns: repeat(7, auto);
  }

  .day {
    text-align: right;
  }

  .selected-day {
    background-color: dodgerblue;
    color: whitesmoke;
  }

</style>
