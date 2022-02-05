<template>
  <div>
    <date-picker v-model="now" />
  </div>
</template>

<script>
import DatePicker from "./component/datepicker.vue";
export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      now: new Date(),
    };
  },
};
</script>

<style></style>
