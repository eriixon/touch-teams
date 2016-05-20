(function(){
    
    var db = require('../db');
    var path = require('path');	
	var uuid = require('node-uuid');	
	
    var League = db.defineResource({
        name: 'league',
		filepath: path.join(__dirname, '/data/leagues.db'),
		relations: {
		    belongsTo: {
                sport: {
                    localField: 'spoty',
                    foreignKey: 'sportId'
                }
            }
		}
    })
    
    exports.getLeagues = function (req, res, next) {
		if (req.params.id) {
            getLeague(req.params.id).then(function(league) {
                return res.json(league)
            })
        } else {
            getLeagues(req.query).then(function(leagues) {
                return res.json(leagues);
            })
        }
	}	
	
	exports.addLeague = function (req, res, next) {
		addLeague(req.body.name, req.body.description).then(function (league) {
				return res.json(league);
			});
	}
	
	exports.getLeague = function(req, res, net) {
		getLeague(req.params.id).then(function(league){
			console.log(league);
			return res.json(league[0]);
		})
	}
    
    function getLeagues(query) {

		var params = query;
		var options = { with: ['team'] };
			return League.findAll(params, options);	
	}
	
	function getLeague(id) {
		var options = { with: ['team']};
			return League.find(id, options);
	}
	
	function addLeague(name, description) {

		return League.create({
			id: uuid.v4(),
			name: name,
			description: description
		});			
	}
}());