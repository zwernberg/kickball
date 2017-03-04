<template>
<ul id="repeat-object" class="demo">
    <div class='row'>
      <b-form-input v-model="newPlayer" type="text" placeholder="Add new player" @keyup.enter="addPlayer"></b-form-input>
      </div>
      <draggable :list=players @end="onEnd">
    <ul class="list-group" v-for="player in players">
    <li class="list-group-item">
    {{ player.name }} {{ player.position}}
    </li>
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
            players: playerStore.getPlayers(),
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

<style>
.list-group-item {
    padding-top:4px !important; 
    padding-bottom:0 !important;
    height: 75px;
}

</style>