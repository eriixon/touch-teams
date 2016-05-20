(function(){
    
    angular.module('teams')
        .component('leagueComponent', {
            templateUrl: 'app/components/league/league.html',
            controller: LeagueController
        })
        
        function LeagueController($state){
            var $ctrl = this;
            
            $ctrl.sport = $state.params.sport;
            $ctrl.league = $state.params.league;
            
            Models.League.findAll({name: $state.params.league},{bypassCache: true}).then(function(league){
              $ctrl.league = league[0];
            })
            
            $ctrl.addLeague = function(league){
                league.sportId = $ctrl.sport.id;
                Models.League.create(league)
                $ctrl.newLeague = {}
            }
        }
    
}())