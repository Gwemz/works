<template>

  <div class="hello">
    <img src="../assets/postcss.svg">
    <!-- 淘宝前端团队logo:http://taobaofed.org/ -->
    <h1>{{ msg }}</h1>
    <h2>教程示例</h2>
    <ul>
      <li>
        <router-link to="/exam1">
          示例一
        </router-link>
        <!-- <a
          href="https://vuejs.org"
          target="_blank"
        >
          示例一
        </a> -->
      </li>
      <li>
        <router-link to="/exam2">
          示例二
        </router-link>
        <!-- <a
          href="https://vuejs.org"
          target="_blank"
        >
          示例二
        </a> -->
      </li>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          示例三
        </a>
      </li>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          示例四
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "better-scroll",
  data() {
    return {
      msg: "BetterScroll"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
  /* color: #42b983; */
  color: rgb(207, 70, 70);
}
</style>
