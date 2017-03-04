var STORAGE_KEY = 'kickball';
export default {
    players: [],

    getPlayers: function () {
        return this.players || this.fetch();
    },

    fetch: function fetch() {
        var players = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        //var players = [];
        players.forEach(function (player, index) {
            player.id = index
        })
        this.uid = players.length;
        return players;
    },

    add: function add(player) {
        this.players.push({name: player, id: this.uid++});
        this.save(this.players);
    },

    save: function save(players) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(players))
    }
};