(function(){
    
    angular.module('teams')
        .service('Models', function(DS){
            var ms = this;
            
            ms.Sport = DS.defineResource({
                name: 'sport',
                endpoint: 'sports'
            })
            
            ms.League = DS.defineResource({
                name: 'league',
                endpoint: 'leagues',  
            })
            
            ms.Team = DS.defineResource({
                name: 'team',
                endpoint: 'leagues',  
            })
            
            ms.Player = DS.defineResource({
                name: 'player',
                endpoint: 'players',  
            })

        })
    
}())