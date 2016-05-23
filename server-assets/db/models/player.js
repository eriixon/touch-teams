(function(){
    var db = require('../db');
    var path = require('path');
    var uuid = require('node-uuid');
    
    var Player = db.defineResource({
        name: 'player',
        filepath: path.join(__dirname, '/data/players.db'),
        relations: {
            belongsTo: {
                team: {
                    localField: 'team',
                    foreignKey: 'teamId'
                }
            }
        }
    });
    
    exports.getPlayers = function (req, res, next) {
		if (req.params.id) {
            getPlayer(req.params.id).then(function(player) {
                return res.json(player)
            })
        } else {
            getPlayers(req.query).then(function(players) {
                return res.json(players);
            })
        }
    }
    function getPlayers(query){
        var params = query;
        return Player.findAll(params);
    }
    
    exports.getPlayer = function(req, res, net) {
		getPlayer(req.params.id).then(function(player){
			console.log(player);
			return res.json(player[0]);
		})
	}
    function getPlayer(id){
        
            return Player.find(id);
    }
    
	exports.addPlayer = function (req, res, next) {
		addPlayer(req.body.firstName, req.body.lastName, req.body.jerseyNumber, req.body.teamId).then(function (player) {
				return res.json(player);
			});
	}
    function addPlayer (firstName, lastName, jerseyNumber, teamId){
        return Player.create({
            id: uuid.v4(),
            firstName: firstName,
            lastName: lastName,
            jerseyNumber: jerseyNumber,
            teamId: teamId
        });
    }

})();