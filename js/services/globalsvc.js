angular.module('app')
    .factory('globalsvc', ['$http', '$q', 'CONST',
        function ($http, $q, CONST) {
            return {
                GetHeroesList: (startingCharacters) => {
                    let timeStamp = new Date().getTime();
                    const hash = CryptoJS.MD5(timeStamp + CONST.marvelPrivateKey + CONST.marvelPublicKey);
                    var url = "https://gateway.marvel.com/v1/public/characters?limit=10&apikey=" +
                        CONST.marvelPublicKey + "&ts=" + timeStamp + "&hash=" + hash;
                    return $http.get(url, {
                        params: {
                            nameStartsWith: startingCharacters,
                        }
                    });
                }
            }
        }]);