<template>
  <div class="hello">
    <h1>{{ messenge }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function () {
    return {
      messenge: "Hello World!",
    };
  },
  beforeCreate() {
    console.log("Before Create");
  },
  mounted() {
    console.log("Mounted");
  },
  created() {
    console.log("Created");
  },
  destroyed() {
    console.log("Destroyed");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
