(function () {

	var router = require('express').Router();
    var Sport  = require('../db/models/sport');
    var League = require('../db/models/league');
  //  var Team   = require('../db/models/team');
  //  var Player = require('../db/models/player');
    
    

    router.route('/sports/:id?')
        .get(Sport.getSports)
        .post(Sport.addSport)
        
    router.route('/leagues/:id?')
        .get(League.getLeagues)
        .post(League.addLeague)
        
    router.route('/teams/:id?')
        .get(Team.getTeams)
        .post(Team.addTeam)

    router.route('/players/:id?')
        .get(Player.getPlayers)
        .post(Player.addPlayer)

    
	//Make sure you export the router component
	exports.router = router;
	
})();