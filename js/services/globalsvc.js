angular.module('app')
    .factory('globalsvc', ['$http', '$q', 'CONST',
        function ($http, $q, CONST) {
            return {
                GetData: function (url, method, data) {
                    var deferred = $q.defer();
                    $http({
                        url: url,
                        method: method,
                        dataType: "json",
                        data: data,
                        headers: {
                            'Content-Type': 'application/json',
                            userKey: CONST.marvelPublicKey,
                            hash: CONST.marvelPrivateKey
                        }
                    }).then(function (data, status, headers, config) {
                        deferred.resolve(data);
                    }), function (data, status, headers, config) {
                        deferred.resolve(data);
                    };
                    return deferred.promise;
                },

                GetHeroesList: function (startingCharacters) {
                    let timeStamp = new Date().getTime();
                    const hash = CryptoJS.MD5(timeStamp + CONST.marvelPrivateKey + CONST.marvelPublicKey);
                    var url = "https://gateway.marvel.com/v1/public/characters?limit=5&apikey=" +
                        CONST.marvelPublicKey + "&ts=" + timeStamp + "&hash=" + hash;
                    return $http.get(url, {
                        params: {
                            nameStartsWith: startingCharacters,
                        }
                    });
                }
            }
        }]);