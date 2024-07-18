<template>
    <div id="app">
        <header>
            <div class="head">
                <img alt="logo" class="logo" src="./img/logo.png" width="250" height="125" />
                <div class="burger-menu" @click="toggleMenu">
                    <span :class="{ open: menuOpen }"></span>
                    <span :class="{ open: menuOpen }"></span>
                    <span :class="{ open: menuOpen }"></span>
                </div>
                <div class="wrapper">
                    <nav :class="{ open: menuOpen }">
                        <router-link to="/" @click="closeMenu">Главная</router-link>
                        <router-link to="/game" @click="closeMenu">Игра "Застрянь друга"</router-link>
                        <router-link to="/contacts" @click="closeMenu">Контакты</router-link>
                    </nav>
                </div>
            </div>
        </header>
        <router-view />
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
}

</script>

<style>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.head {
    width: 100%;
    height: 3.5em;
    background-color: #262626;
    display: flex;
    flex-direction: row;
}

.logo {
    margin: 13px 2em 0 20px;
    width: 10em;
    height: 1.5em;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 1rem;
}

.burger-menu {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    margin-top: 1em;
    right: 20px;
}

.burger-menu span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: white;
    transition: all 0.3s;
}

.burger-menu span.open:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.burger-menu span.open:nth-child(2) {
    opacity: 0;
}

.burger-menu span.open:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
}

nav a.router-link-exact-active {
    color: #ffffff;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    .logo {
        width: 17em;
        height: 2em;
    }
}
@media (max-width: 600px) {
    .head {
        flex-direction: column;
    }

    .logo {
        width: 11em;
        height: 1.5em;
        margin-top: 1em;
    }

    nav {
        width: 100%;
        font-size: 12px;
        margin-top: 0.5em;
        text-align: left;
    }

    .burger-menu {
        display: flex;
    }
    nav {
        display: none;
        flex-direction: column;
        width: 100%;
        text-align: center;
        background-color: #262626;
        position: absolute;
        top: 45px;
        left: 0;
        z-index: 10000;
    }
    nav.open {
        display: flex;
    }
    nav a {
        margin: 10px 0;
        padding: 10px;
        color: white;
    }
}
</style>
