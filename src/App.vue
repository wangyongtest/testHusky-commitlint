<template>
  <!-- <header>
    <img
      ref="imgTag"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
      @click="handlerTest($event)"
    />
    <li v-for="item in lists" :key="item">{{ item }}</li>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
  <div id="canvasDom"></div>
</template>

<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
// import TheWelcome from "./components/TheWelcome.vue";
// const test = 'test eslint commit';
// console.log(test);
// const handlerTest = function (event: MouseEvent): void {
//   console.log(event);
// };

// const lists = ["1", "2", "3", "4"];

// canvas 绘制
import { CreateImg } from "./components/canvas-img";
import { onMounted } from "vue";
import { Options } from "./components/types";
import bgImg from "./assets/01.webp";
import iconImg from "./assets/02.webp";

const options: Options = {
  bgColor: "#cccccc",
  bgImgUrl: bgImg,
  children: [
    {
      icon: iconImg,
      text: "入口",
      startX: 0,
      startY: 100,
    },
  ],
  lines: [],
};

onMounted(() => {
  const dom: HTMLElement | HTMLSelectElement | null = document.querySelector(
    "#canvasDom"
  );
  console.log(dom);
  if (dom) {
    const createCvs = new CreateImg(dom, options);
    createCvs.init();
  }
});
</script>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
