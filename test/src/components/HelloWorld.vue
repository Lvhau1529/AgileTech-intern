<template>
  <div class="hello" v-on:mousemove="positionMouse">
    <h1 class="title" v-once>{{ message }}</h1>
    <h2 v-html="tag"></h2>
    <h3 v-if="state">{{ Date.now() }}</h3>
    <a :href="href" target="_blank">{{ message }}</a>
    <p>{{ message.split("").reverse().join("") }}</p>
    <p>{{ reverseString }}</p>

    <!-- Class and style bindings -->
    <p v-bind:class="{ 'text-danger': isActive }">Result: {{ count }}</p>

    <!-- Count up -->
    <button v-on:click="isActive ? (isActive = false) : (isActive = true)">
      Change color
    </button>
    <br />
    <button v-on:click="increament()">+</button>
    <button v-on:click="decreament()">-</button>
    <!-- ./Count up -->

    <!-- Position -->
    <h1>Positon mouse: X:{{ x }}, Y: {{ y }}</h1>
    <!-- ./Position -->

    <!-- v-if -->
    <div v-if="false">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </div>

    <!-- v-for with array-->
    <div>
      <ul id="example-2">
        <li v-for="item in items" :key="item.name">
          {{ item.name }}
        </li>
      </ul>
    </div>

    <!-- v-for with object -->
    <ul>
      <li v-for="item of object" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function () {
    return {
      message: "Hello Vue!",
      tag: "<span style='color: red'>Hello World</span>",
      href: "https://vi.vuejs.org/",
      state: false,
      count: 0,
      x: 0,
      y: 0,
      isActive: true,
      items: [{ name: "Cà phê" }, { name: "Trà đặc" }, { name: "Bò húc" }],
      object: {
        họ: "Hậu",
        tên: "Lê",
        tuổi: 22,
      },
    };
  },
  computed: {
    reverseString: function () {
      return this.message.split("").reverse().join("");
    },
  },
  methods: {
    helloWorld: function () {
      alert("Hello World");
    },
    increament: function () {
      this.count++;
      console.log("Increament");
    },
    decreament: function () {
      this.count--;
      console.log("Decreament");
    },
    positionMouse: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
  },
  // beforeCreate() {
  //   console.log("Before Create");
  // },
  // mounted() {
  //   console.log("Mounted");
  //   console.log(document.querySelector(".title"));
  // },
  // created() {
  //   console.log("Created");
  // },
  // destroyed() {
  //   console.log("Destroyed");
  // },
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
.hello {
  width: 100%;
  height: 100vh;
}
.text-danger {
  color: red;
}
</style>
