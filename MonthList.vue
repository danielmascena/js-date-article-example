<template>
  <div>
    <ul>
      <li>
        <month-list-item :date-to-present="myDate">

        </month-list-item>
      </li>
    </ul>
  </div>
</template>

<script>
import MonthListItem from './MonthListItem.vue';

export default {
    components: {
      MonthListItem
    },
    data() {
      return {
        myDate: new Date()
      }
    }
};
</script>

<style lang="scss">
  ul {
    list-style: none;
  }
</style>
