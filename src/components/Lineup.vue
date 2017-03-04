<template>
<ul id="repeat-object" class="demo">
    <input class="new-player"
      autofocus autocomplete="off"
      placeholder="Add Player"
      v-model="newPlayer"
      @keyup.enter="addPlayer">
      <draggable :list=players @end="onEnd">
  <ul v-for="player in players">
    {{ player.name }} {{ player.position}}
  </ul>
      </draggable>
</ul>

</template>

<script>
import playerStore from '../stores/playerStore'
import draggable from 'vuedraggable'

export default  {
    components: {
        draggable,
    },
    data: function () {
        return {
            greeting: 'hello',
            players: playerStore.fetch(),
            newPlayer: ''
        }
    },

    methods: {
        addPlayer: function () {
            //this.players.push({name: this.newPlayer});
            playerStore.add(this.newPlayer);
            this.players = playerStore.getPlayers();
            this.newPlayer = '';
        },

        onEnd: function () {
            playerStore.save(this.players);
        }
    }
}

</script>