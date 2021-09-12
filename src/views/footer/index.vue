<template>
  <div>
    <router-view> </router-view>
    <Footerbar>
      <!-- <div>
        <img src="@/assets/table_img/home.svg" />
        分类
      </div>
      <div>
        <img src="@/assets/table_img/home.svg" />
        购物车
      </div>
      <div>
        <img src="@/assets/table_img/profile.svg" />
        我的
      </div> -->
      <FooterbarItem path="home">
        <img slot="image" src="@/assets/table_img/profile.svg" />
        <img slot="activeImage" src="@/assets/table_img/profile_active.svg" />
        <div slot="title">首页</div>
      </FooterbarItem>
      <FooterbarItem path="cate">
        <img slot="image" src="@/assets/table_img/profile.svg" />
        <img slot="activeImage" src="@/assets/table_img/profile_active.svg" />

        <div slot="title">分类</div>
      </FooterbarItem>
      <FooterbarItem path="shoping">
        <img slot="image" src="@/assets/table_img/profile.svg" />
        <img slot="activeImage" src="@/assets/table_img/profile_active.svg" />
        <div slot="title">购物车</div>
      </FooterbarItem>
      <FooterbarItem path="my">
        <img slot="image" src="@/assets/table_img/profile.svg" />
        <img slot="activeImage" src="@/assets/table_img/profile_active.svg" />
        <div slot="title">我的</div>
      </FooterbarItem>
      <!-- <FooterbarItem />
      <FooterbarItem />
      <FooterbarItem /> -->
    </Footerbar>
  </div>
</template>

<script>
import Footerbar from "./component/Footerbar.vue";
import FooterbarItem from "./component/footer-item.vue";
export default {
  name: "footer",
  components: {
    Footerbar,
    FooterbarItem,
  },
};
</script>

<style scoped lang="scss"></style>
