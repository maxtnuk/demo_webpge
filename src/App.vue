<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="/">행복한 다람쥐</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav  v-for="item in menuItems" :key="item.title">
                    <b-nav-item>
                        <b-button variant="outline-light" :to="item.path">
                            {{item.title}}
                        </b-button>
                    </b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  //import HelloWorld from "./components/HelloWorld";


  export default {
    name: "App",
    data: function (){
      return {
        appTitle: 'Awesome App',
        sidebar: false,
        menuItems: [
          { title: '기업소개', path: '/introduce', },
          { title: '사업분야', path: '/business', },
          { title: '포트폴리오', path: '/photpolio',},
            { title: '위치', path: '/location',}
        ]
      }
    },
  };
</script>
<style lang="stylus">

</style>
