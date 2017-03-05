<template>
<ul id="repeat-object" class="demo">
    <div class='row'>
      <b-form-input v-model="newPlayer" type="text" placeholder="Add new player" @keyup.enter="addPlayer"></b-form-input>
      </div>
      <draggable :list=players @end="onEnd">
    <ul class="list-group" v-for="player in players">
    <a href="#" class="list-group-item clearfix">
        {{ player.name }} {{ player.position}} 
        <span class="pull-right">
        <button class="btn btn-xs btn-danger" @click="removePlayer(player)">
            <icon name="trash-o"></icon>
        </button>
        </span>
    </a>
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
            players: playerStore.getPlayers(),
            newPlayer: ''
        }
    },

    methods: {
        addPlayer: function () {
            playerStore.add(this.newPlayer);
            this.newPlayer = '';
        },

        removePlayer: function (player){
            playerStore.remove(player);
        },

        onEnd: function () {
            playerStore.save(this.players);
        }
    }
}

</script>