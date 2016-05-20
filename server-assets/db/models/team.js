(function(){
    var db = require('../db');
    var path = require('path');
    var uuid = require('node-uuid');
    
    var Team = bd.defineResource({
        name: 'team',
        filepath: path.join(__dirname, '/data/teams.db'),
        relations: {
            belongsTo: {
                league: {
                    localField: 'league',
                    foreignKey: 'leagueId'
                }
            }
        }
    })
    
    exports.getTeams = function (req, res, next) {
        
        getTeams().then(function (teams) {
                res.json(teams);
            }
        );
    }
    function getTeams(){
        var params = {};
        var options = {};
        return Team.findAll(params, options);
    }
    
    exports.addTeam = function (req, res, next) {
        
		addLeague(req.body).then(function (team) {
				return res.json(team);
			}
		);
    }
    
    
    
    
    
    
})();