<template>
  <div class="container">
    <div class="logo">
      <img src="@/assets/logo/logo.png" />
    </div>
    <div class="navigation">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="navigation-item"
        :class="{ active: index === activeIndex }"
        @click="activeIndex = index"
        ref="itemRefs"
      >
        <router-link :to="item.url">{{ item.title }}</router-link>
      </div>
      <div
        class="navigation-underline"
        :class="{ active: activeIndex !== -1 }"
        :style="underlineStyle"
        ref="underlineRef"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
const activeIndex = ref(0);
// const items = ref(["露营圣地", "热门资讯", "交友论坛", "装备购买","活动专题","关于我们"]);
const items = ref([
  { title: "露营圣地", url: "/home" },
  { title: "热门资讯", url: "/other" },
  { title: "交友论坛", url: "/404" },
  { title: "装备购买", url: "/home" },
  { title: "活动专题", url: "/home" },
  { title: "关于我们", url: "/aboutUs" },
]);
const underlineStyle = ref({
  transform: "translateX(0)",
});

const itemRefs = ref([]);
const underlineRef = ref(null);

const updateUnderline = () => {
  // 获取标题的宽度，减去下划线的宽度除以2，可以使下划线在标题下居中显示
  const item = itemRefs.value[activeIndex.value];
  const underline = underlineRef.value;
  let newLeft = Number(item.offsetWidth - underline.offsetWidth) / 2;
  if (item && underline) {
    const { offsetLeft } = item;
    console.log(offsetLeft);
    underlineStyle.value = {
      transform: `translateX(${offsetLeft + newLeft}px)`,
    };
  }
};

watch(activeIndex, () => {
  updateUnderline();
});

onMounted(() => {
  updateUnderline();
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    width: 199.89px;
    height: 33.16px;
    margin-right: 20px;
  }
  .navigation {
    width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    padding: 0 20px;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    .navigation-item {
      cursor: pointer;
      margin-right: 20px;
      width: 120px;
      text-align: center;
      text-decoration: none;
    }

    .navigation-item.active {
      color: #237f42;
    }

    .navigation-underline {
      /* 下划线的宽度 */
      width: 50px;
      height: 3px;
      border-radius: 2px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #237f42;
      transition: all 0.3s ease-in-out;
    }

    .navigation-underline.active {
      transform: translateY(-3px);
    }

    // 取消router-kink下划线
    a {
      text-decoration: none;
      color: #237f42;
    }

    .router-link-active {
      text-decoration: none;
    }
  }
}
</style>
