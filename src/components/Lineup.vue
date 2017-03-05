<template>
<ul id="repeat-object" class="demo">
    <div class='row'>
      <b-form-input v-model="newPlayer" type="text" placeholder="Add new player" @keyup.enter="addPlayer"></b-form-input>
      </div>
    <draggable :list=players @end="onEnd">
    <b-list-group v-for="player in players" :key="player.id">
        <b-list-group-item class="clearfix">
            {{ player.name }} {{ player.position}} 
            <span class="float-xs-right">
                <span class="btn btn-default" @click="removePlayer(player)">
                    <icon name="trash-o"></icon>
                </span>
            </span>
        </b-list-group-item>
    </b-list-group>
      </draggable>
</ul>

</template>

<script>
import playerStore from '../stores/playerStore'
import draggable from 'vuedraggable'
import FormInput from 'bootstrap-vue/components/form-input.vue'
import ListGroup from 'bootstrap-vue/components/list-group.vue'
import ListGroupItem from 'bootstrap-vue/components/list-group-item.vue'
export default  {
    components: {
        draggable,
        bFormInput:FormInput,
        bListGroup: ListGroup,
        bListGroupItem: ListGroupItem
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