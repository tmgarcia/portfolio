<template>
    <div class="main-header">
        <div class="main-header__nav">
            <div v-for="nav in navLinks" :key="nav.label"  class="main-header__nav-item">
                <router-link :to="nav.to">{{nav.label}}</router-link>
            </div>
        </div>
        <div class="main-header__social">
            <div v-for="nav in socialLinks" :key="nav.icon"  class="main-header__social-item">
                <a :href="nav.to" :title="nav.title"><i :class="nav.icon"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainHeader",
    computed: {
        navLinks(){
            return [
                { to: "/", label: "Home" },
                { to: "/projects", label: "Projects" },
                { to: "/demos", label: "Demos" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
            ];
        },
        socialLinks(){
            return [
                { to: "https://github.com/tmgarcia", icon: "tec-github-original", title: "Github" },
                { to: "https://www.linkedin.com/in/taylor-garcia-43410991/", icon: "tec-linkedin-plain", title: "LinkedIn" },
            ]
        }
    }
}
</script>

<style lang="scss">
.main-header {
    $self: &;
    height: 50px;
    background-color: $secondary;
    padding-left: 80px;
    display: flex;
    justify-content: space-between;

    &__nav, &__social {
        height: 100%;
        display: flex;
        align-items: center;
    }

    &__social-item {
        font-size: 1.5rem;
    }

    &__nav-item, &__social-item {
        padding: 0 10px;
        color: $text-default-bright;

        &:first-of-type {
            padding-left: 0;
        }
        a, a:hover {
            color: inherit;
            text-decoration: none;
        }
    }
    
    
}
</style>
