(function(){
    var db = require('../db');
    var path = require('path');
    var uuid = require('node-uuid');
    
    var Team = bd.defineResource({
        name: 'team',
        filepath: path.join(__dirname, '/data/teams.db'),
		relationships: {
                    belongsTo: {
                        league: {
                            localField: 'league',
                            localKey: 'leagueId'
                        	}
                    },
                     hasMany: {
                        team: {
                            localField: 'player',
                            foreignKey: 'teamId'
                        	}
                	}
		}        
    })
    
    exports.getTeams = function (req, res, next) {
		if (req.params.id) {
            getTeam(req.params.id).then(function(team) {
                return res.json(team)
            })
        } else {
            getTeams(req.query).then(function(team) {
                return res.json(teams);
            })
        }
    }
    function getTeams(query){
        var params = query;
        var options = {with: ['player']};
        return Team.findAll(params, options);
    }
    
    exports.getTeam = function(req, res, net) {
		getTeam(req.params.id).then(function(team){
			console.log(team);
			return res.json(team[0]);
		})
	}
    function getTeam(id){
        var options = {with: ['player']};
            return Team.findAll(params, options);
    }
    
	exports.addTeam = function (req, res, next) {
		addTeam(req.body.name, req.body.description).then(function (team) {
				return res.json(team);
			});
	}
    function addTeam (name, description, leagueId){
        return Team.create({
            id: uuid.v4(),
            name: name,
            description: description,
            leagueId: leagueId
        });
    }

})();