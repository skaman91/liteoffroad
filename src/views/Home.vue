<template>
    <div class="home">
        <div class="head-info">
            <div class="team-name">Liteoffroad team</div>
            <div class="info">Мы, команда энтузиастов полного привода и бездорожья ленинградской области, приветствуем
                Вас на нашем сайте! Следите за нашими выездами, поддерживайте, участвуйте в них!
            </div>
        </div>
        <YouTubeGallery/>
    </div>
</template>

<script>
import YouTubeGallery from '../components/YouTubeGallery.vue'

export default {
  name: 'Home',
  components: {
    YouTubeGallery
  }
}
</script>
<style>
.team-name {
    text-align: center;
    font-size: 3em;
}

.info {
    text-align: center;
    font-size: 20px;
    margin: 1em 7em 1em 7em;
}

@media (max-width: 600px) {
    .info {
        margin: 0.5em;
    }
}
</style>
