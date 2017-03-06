<template>
<div id="repeat-object" class="demo">
    <div class='row'>
        <div class="container">
      <b-form-input v-model="newPlayer" type="text" placeholder="Add new player" @keyup.enter="addPlayer"></b-form-input>
<b-form-select v-model="newPosition" :options="positionOption" :defaultOption="defaultOption" state="success"> 
</b-form-select>
      </div>
      </div>
    <div class="row">
        <div class="container">
            <draggable :list=starting @end="onEnd">
                <b-list-group v-for="player in starting" :key="player.id">
                    <b-list-group-item class="clearfix">
                        <div class="col-1">
                        {{ player.name }} 
                        </div>
                        <div class="col-10">
                        <b-form-select v-model="player.position" :change="changePosition(player)" :options="positionOption" :defaultOption="currentPosition(player)" state="success"> 
                        </b-form-select>
                        </div>
                        <div class="col-1">
                        <span class="float-xs-right">
                            <span class="btn btn-default" @click="removePlayer(player)">
                                <icon name="trash-o"></icon>
                            </span>
                        </span>
                        </div>

                    </b-list-group-item>
                </b-list-group>
            </draggable>
        </div>
    </div>

    <div class="row">
        <div class="container">
            <draggable :list=bench @end="onEnd" @add="onAdd">
                <b-list-group v-for="player in bench" :key="player.id">
                    <b-list-group-item class="clearfix">
                        <div class="col-1">
                        {{ player.name }} 
                        </div>
                        <div class="col-10">
                        <b-form-select v-model="player.position" :change="changePosition(player)" :options="positionOption" :defaultOption="currentPosition(player)" state="success"> 
                        </b-form-select>
                        </div>
                        <div class="col-1">
                        <span class="float-xs-right">
                            <span class="btn btn-default" @click="removePlayer(player)">
                                <icon name="trash-o"></icon>
                            </span>
                        </span>
                        </div>
                    </b-list-group-item>
                </b-list-group>
            </draggable>
        </div>
    </div>
</div>

</template>

<script>
import playerStore from '../stores/playerStore'
import enums from '../enums'
import draggable from 'vuedraggable'
import FormInput from 'bootstrap-vue/components/form-input.vue'
import ListGroup from 'bootstrap-vue/components/list-group.vue'
import ListGroupItem from 'bootstrap-vue/components/list-group-item.vue'
import FormSelect from 'bootstrap-vue/components/form-select.vue'
export default  {
    components: {
        draggable,
        bFormInput:FormInput,
        bListGroup: ListGroup,
        bListGroupItem: ListGroupItem,
        bFormSelect: FormSelect
    },
    data: function () {
        var self = this;
        return {
            players: playerStore.getPlayers(),
            newPlayer: '',
            newPosition: enums.position.BENCH,
            defaultOption: {text: enums.position.BENCH, value: enums.position.BENCH},
            positionOption: [
                {text: enums.position.BENCH, value: enums.position.BENCH},
                {text: enums.position.CATCHER, value: enums.position.CATCHER},
                {text: enums.position.PITCHER, value: enums.position.PITCHER},
                {text: enums.position.FIRSTBASE, value: enums.position.FIRSTBASE},
                {text: enums.position.SECONDBASE, value: enums.position.SECONDBASE},
                {text: enums.position.SHORTSTOP, value: enums.position.SHORTSTOP},
                {text: enums.position.THIRDBASE, value: enums.position.THIRDBASE},
                {text: enums.position.LEFTFIELD, value: enums.position.LEFTFIELD},
                {text: enums.position.LEFTCENTERFIELD, value: enums.position.LEFTCENTERFIELD},
                {text: enums.position.RIGHTCENTERFIELD, value: enums.position.RIGHTCENTERFIELD},
                {text: enums.position.RIGHTFIELD, value: enums.position.RIGHTFIELD}
            ]
        }
    },

    computed: {
        bench: function () {
            return this.players.filter(function (player) {
                return player.position === enums.position.BENCH;
            })
        },

        starting: function () {
            return this.players.filter(function (player) {
                return player.position != enums.position.BENCH;
            })
        }
    },

    methods: {
        addPlayer: function () {
            if (_.isEmpty(_.trim(this.newPlayer)) === false) {
                playerStore.add(this.newPlayer, this.newPosition);
            }
            this.newPlayer = '';
            this.newPosition = enums.position.BENCH;
        },

        removePlayer: function (player){
            playerStore.remove(player);
        },

        currentPosition: function (player) {
            return {text: player.position, value: player.position}
        },

        onEnd: function () {
            playerStore.save(this.players);
        },

        onAdd: function () {
            console.log("bench");
        },

        changePosition: function (player) {
            playerStore.updatePlayer(player);
        }
    }
}

</script>