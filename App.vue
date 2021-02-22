// App.vue

<template>
  <main>
    <h1 class="title">Calendar App</h1>
    <section>
      <fieldset>
        <legend v-on:click="sayHello">
          Range Date
        </legend>
        <form>
          <div class="form-control">
            <label>
              <input type="number" :min="today.getDate()" :max="lastDay" v-model.number="currentDate.day" />
              <input type="number" min="1" max="12" />
            </label>
          </div>

        </form>
      </fieldset>

    </section>
    <month-list>

    </month-list>
  </main>
</template>

<script>
import MonthList from './MonthList.vue';
import DateItem from "./DateItem";

let today, todate;

export default {
  components: {
    MonthList
  },
  data() {
    return {
      today: today,
      currentDate: todate,
      lastDay: (new Date(todate.year, todate.month, 0)).getDate()
    };
  },
  methods: {
      sayHello(){
        console.log('hello');
      }
  },
  beforeCreate() {
    today = new Date();
    todate = new DateItem(today.getDate(), today.getMonth()+1, today.getFullYear());
    console.log("🆕");
  },
  created() {
    console.log("The instance is created but before its template is rendered in the DOM", " fire AJAX calls 📡");
  },
  beforeMount() {
    console.log("The reactive isn't set up yet", "can't access or update data (use computed property i.e.)");
  },
  mounted() {
    console.log("Similar to jQuery's ready function", this.$el);
  },
  beforeUpdate() {
    console.log("Before update 🔄");
  },
  updated() {
    console.log("Updated 📰");
  },
  beforeDestroy() {
    console.log("Before Destroy - turn off listeners ␡");
  },
  destroyed() {
    console.log("Destroyed - farewell 👋");
  },

};
</script>

<style lang="scss" scoped>
.container {
  color: green;
}
</style>
