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
        .get(League.getTeams)
        .post(League.addTeam)

    router.route('/players/:id?')
        .get(League.getPlayers)
        .post(League.addPlayer)

    
	//Make sure you export the router component
	exports.router = router;
	
})();