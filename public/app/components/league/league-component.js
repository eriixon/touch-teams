(function(){
    
    angular.module('teams')
        .component('leagueComponent', {
            templateUrl: 'app/components/league/league.html',
            controller: LeagueController
        })
        
        function LeagueController($state, Models){
            var $ctrl = this;
            
            $ctrl.sport = $state.params.sport;
            $ctrl.league = $state.params.league;
            
            Models.League.findAll({where: $state.params.league},{bypassCache: true}).then(function(league){
              $ctrl.league = league[0];
              Models.Team.findAll({ where: { league: $ctrl.league.id } }).then(function (teams) {
                    $ctrl.teams = teams;
            })
            })
            
            $ctrl.addTeam = function(team){
                team.leagueId = $ctrl.league.id;
                Models.Team.create(team)
                $ctrl.newTeam = {}
            }
        }
    
}())