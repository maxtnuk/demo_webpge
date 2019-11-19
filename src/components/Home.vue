<template>
  <div>
    <h1>안녕하세요 행복한 다람쥐에 온것을 환영합니다</h1>
    <h3>우리들의 기억들</h3>
    <b-card-group deck id="card_interface" v-for="item in phto_list" :key="item.title">
      <b-card
              :title= "item.title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
      >
        <b-card-text>
          {{item.content}}
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </b-card-group>
  </div>

</template>
<script>
export default {
  data:function() {
    return {
      phto_list:[
        { title: '우리의 순간', content: '생각을 해봐', },
        { title: '처음보는 순간', content: '우리 처음 설레는 마음을 ', },
        { title: '고민 되는 순간', content: ' 서슴없이 고민을 털어요 ',},
        { title: '무엇인가 끌리는 순간', content: ' 그리고 열정을 보여요 ',}
      ]
    }
  }
};
</script>
<style lang="stylus">
  h3
    margin 30px
  h1
    margin 20px
  #card_interface
    float left
    margin 10px
</style>
