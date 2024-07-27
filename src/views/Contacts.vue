<template>
    <div class="contacts">
        <h1>Контакты</h1>
        <div class="contact-links">
<!--            <a href="https://www.youtube.com/channel/UCemdsZKI6DDswhD9lsWmorA" target="_blank" class="v-btn v-btn&#45;&#45;text theme&#45;&#45;dark v-size&#45;&#45;default"><span class="v-btn__content"><span class="mr-2">ПЕРЕЙТИ НА КАНАЛ</span><i aria-hidden="true" class="v-icon notranslate mdi mdi-open-in-new theme&#45;&#45;dark"></i></span></a>-->
            <a href="https://www.youtube.com/@Liteoffroad1" target="_blank" class="contact-link">
                <font-awesome-icon :icon="['fab', 'youtube']" /> Наш YouTube канал
            </a>
            <a href="https://t.me/liteoffroad" target="_blank" class="contact-link">
                <font-awesome-icon :icon="['fab', 'telegram']" /> Telegram канал
            </a>
            <a href="https://t.me/liteoffroad_bot" target="_blank" class="contact-link">
                <font-awesome-icon :icon="['fab', 'telegram']" /> Telegram БОТ для управления игрой "Застрянь друга"
            </a>
            <a href="https://vk.com/liteoffroad" target="_blank" class="contact-link">
                <font-awesome-icon :icon="['fab', 'vk']" /> VK группа
            </a>
            <a href="mailto:skaman93@mail.ru" class="contact-link">
                <font-awesome-icon :icon="['fas', 'envelope']" /> Email
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style scoped>
.contacts {
    width: 50%;
    text-align: center;
    margin-top: 50px;
}

.contact-links {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.contact-link {
    display: flex;
    align-items: center;
    margin: 10px 0;
    font-size: 20px;
    color: #35495e;
    text-decoration: none;
}

.contact-link:hover {
    color: #42b983;
}

.contact-link svg {
    margin-right: 10px;
}
</style>
