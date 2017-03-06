var STORAGE_KEY = 'kickball';
export default {
    players: [],

    getPlayers: function () {
        return _.isEmpty(this.players) ? this.fetch() : this.players;
    },

    fetch: function fetch() {
        this.players = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        //var players = [];
        this.players.forEach(function (player, index) {
            player.id = index
        })
        this.uid = this.players.length;
        return this.players;
    },

    add: function add(player, _position) {
        this.players.push({name: player, position: _position, id: this.uid++});
        this.save(this.players);
    },

    remove: function remove(player) {
        this.players.splice(this.players.indexOf(player), 1);
        this.save(this.players);
    },

    save: function save(players) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(players))
    },

    updatePlayer: function updatePlayer(player){
        var match = _.find(this.players, function(o) { return o.id === player.id});
        match.position = player.position;

        this.save(this.players);
    }
};