(function(){
    
    angular.module('teams')
        .component('sportComponent', {
            templateUrl: 'app/components/sport/sport.html',
            controller: SportController
        })
        
        function SportController($state, Models){
            var $ctrl = this;
            
            Models.Sport.findAll({where: {name:$state.params.sport}}).then(function(sport){
              $ctrl.sport = $state.params.sport;
            })
            
            $ctrl.addLeague = function(league){
                league.sportId = $ctrl.sport.id;
                debugger
                Models.League.create(league)
                $ctrl.newLeague = {}
            }
                        
        }
    
}())