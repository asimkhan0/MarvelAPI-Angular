angular.module('app')
    .factory('CONST', [
        function () {
            return {
                URLS: {
                    getHeroesByCharacters:"https://gateway.marvel.com/v1/public/characters",
                    getHeroById:"https://gateway.marvel.com/v1/public/characters/",
                },
                offset: 10,
                marvelPublicKey: 'e1df74b51f22c151f2980d4a0a7db060',
                marvelPrivateKey:"4d708ce7654386ec17b507c329a30ca0ae549fad"
            }
        }]);
