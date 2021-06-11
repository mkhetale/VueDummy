<!-- =========================================================================================
	File Name: App.vue
	Description: Main vue file - APP
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Version: 1.1
	Author: Pixinvent
	Author URL: hhttp://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
// import $ from 'jquery'
//  $(window).scroll(function() {   
//    if($(window).scrollTop() + $(window).height() == $(document).height()) {
//        alert("bottom!");
//    }
// });
import themeConfig from '@/../themeConfig.js'

export default {
    watch: {
        '$store.state.theme'(val) {
            this.toggleClassInBody(val);
        }
    },
    methods: {
        toggleClassInBody(className) {
            if (className == 'dark') {
                if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
                document.body.classList.add('theme-dark');
            } else if (className == 'semi-dark') {
                if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
                document.body.classList.add('theme-semi-dark');
            } else {
                if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
                if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
            }
        },
        onscroll () {
            console.log('Calling scroll function')
            //document.onscroll = () => {
            //console.log('ON scroll')
            //let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
            let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
            console.log(bottomOfWindow)
            if (bottomOfWindow) {
                // loadMore(id)
                console.log('bottom')
            }
            //};
        },
    },
    // mounted() {
    //     this.toggleClassInBody(themeConfig.theme)
    // },
    // created() {
    //     window.addEventListener('scroll', () => alert('Hi'));
    // },
    // destroyed() {
    //     window.removeEventListener('scroll', this.onscroll);
    // },
}
</script>