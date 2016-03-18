app.controller('championController', ['$scope', '$timeout', 'championAPI', function ($scope, $timeout, championAPI) {

    $scope.championList = {};
    $scope.query = '';
    $scope.championSelected = {};

    $scope.selectChampion = function (champ) {
        championAPI.findById(champ.id, 'skins,lore' ,function (data) {
            $scope.championSelected = data;
            $('#bankModalAdd').modal('show');
            console.log(data);
        });
        console.log($scope.championSelected)
    };


    $scope.loadChamps = function () {
        //championAPI.findAll(function (data) {
        //    $scope.championList = data;
        //    console.log(data)
        //});
        var xxx = {
            "Aatrox": {
                "id": 266,
                "key": "Aatrox",
                "name": "Aatrox",
                "title": "a Espada Darkin"
            },
            "Ahri": {"id": 103, "key": "Ahri", "name": "Ahri", "title": "a Raposa de Nove Caudas"},
            "Akali": {"id": 84, "key": "Akali", "name": "Akali", "title": "o Punho das Sombras"},
            "Alistar": {"id": 12, "key": "Alistar", "name": "Alistar", "title": "o Minotauro"},
            "Amumu": {"id": 32, "key": "Amumu", "name": "Amumu", "title": "a Múmia Triste"},
            "Anivia": {"id": 34, "key": "Anivia", "name": "Anivia", "title": "a Criofênix"},
            "Annie": {"id": 1, "key": "Annie", "name": "Annie", "title": "a Criança Sombria"},
            "Ashe": {"id": 22, "key": "Ashe", "name": "Ashe", "title": "a Arqueira do Gelo"},
            "Azir": {"id": 268, "key": "Azir", "name": "Azir", "title": "o Imperador das Areias"},
            "Bard": {"id": 432, "key": "Bard", "name": "Bardo", "title": "o Protetor Andarilho"},
            "Blitzcrank": {"id": 53, "key": "Blitzcrank", "name": "Blitzcrank", "title": "o Grande Golem a Vapor"},
            "Brand": {"id": 63, "key": "Brand", "name": "Brand", "title": "a Vingança Flamejante"},
            "Braum": {"id": 201, "key": "Braum", "name": "Braum", "title": "o Coração de Freljord"},
            "Caitlyn": {"id": 51, "key": "Caitlyn", "name": "Caitlyn", "title": "a Xerife de Piltover"},
            "Cassiopeia": {"id": 69, "key": "Cassiopeia", "name": "Cassiopeia", "title": "o Abraço da Serpente"},
            "Chogath": {"id": 31, "key": "Chogath", "name": "Cho'Gath", "title": "o Terror do Vazio"},
            "Corki": {"id": 42, "key": "Corki", "name": "Corki", "title": "o Bombardeiro Ousado"},
            "Darius": {"id": 122, "key": "Darius", "name": "Darius", "title": "a Mão de Noxus"},
            "Diana": {"id": 131, "key": "Diana", "name": "Diana", "title": "o Escárnio da Lua"},
            "DrMundo": {"id": 36, "key": "DrMundo", "name": "Dr. Mundo", "title": "o Louco de Zaun"},
            "Draven": {"id": 119, "key": "Draven", "name": "Draven", "title": "o Carrasco de Noxus"},
            "Ekko": {"id": 245, "key": "Ekko", "name": "Ekko", "title": "o Rapaz que Estilhaçou o Tempo"},
            "Elise": {"id": 60, "key": "Elise", "name": "Elise", "title": "a Aranha Rainha"},
            "Evelynn": {"id": 28, "key": "Evelynn", "name": "Evelynn", "title": "a Criadora de Viúvas"},
            "Ezreal": {"id": 81, "key": "Ezreal", "name": "Ezreal", "title": "o Explorador Pródigo"},
            "FiddleSticks": {"id": 9, "key": "FiddleSticks", "name": "Fiddlesticks", "title": "o Mensageiro da Morte"},
            "Fiora": {"id": 114, "key": "Fiora", "name": "Fiora", "title": "a Grande Duelista"},
            "Fizz": {"id": 105, "key": "Fizz", "name": "Fizz", "title": "o Trapaceiro das Marés"},
            "Galio": {"id": 3, "key": "Galio", "name": "Galio", "title": "o Sentinela da Amargura"},
            "Gangplank": {"id": 41, "key": "Gangplank", "name": "Gangplank", "title": "o Terror dos Doze Mares"},
            "Garen": {"id": 86, "key": "Garen", "name": "Garen", "title": "o Poder de Demacia"},
            "Gnar": {"id": 150, "key": "Gnar", "name": "Gnar", "title": "o Yordle Pré-Histórico"},
            "Gragas": {"id": 79, "key": "Gragas", "name": "Gragas", "title": "o Badernista"},
            "Graves": {"id": 104, "key": "Graves", "name": "Graves", "title": "o Foragido"},
            "Hecarim": {"id": 120, "key": "Hecarim", "name": "Hecarim", "title": "a Sombra da Guerra"},
            "Heimerdinger": {"id": 74, "key": "Heimerdinger", "name": "Heimerdinger", "title": "o Inventor Idolatrado"},
            "Illaoi": {"id": 420, "key": "Illaoi", "name": "Illaoi", "title": "a Sacerdotisa Cráquem"},
            "Irelia": {"id": 39, "key": "Irelia", "name": "Irelia", "title": "a Vontade das Lâminas"},
            "Janna": {"id": 40, "key": "Janna", "name": "Janna", "title": "a Fúria da Tormenta"},
            "JarvanIV": {"id": 59, "key": "JarvanIV", "name": "Jarvan IV", "title": "o Exemplo de Demacia"},
            "Jax": {"id": 24, "key": "Jax", "name": "Jax", "title": "o Grão-Mestre das Armas"},
            "Jayce": {"id": 126, "key": "Jayce", "name": "Jayce", "title": "o Defensor do Amanhã"},
            "Jhin": {"id": 202, "key": "Jhin", "name": "Jhin", "title": "o Virtuoso"},
            "Jinx": {"id": 222, "key": "Jinx", "name": "Jinx", "title": "o Gatilho Desenfreado"},
            "Kalista": {"id": 429, "key": "Kalista", "name": "Kalista", "title": "a Lança da Vingança"},
            "Karma": {"id": 43, "key": "Karma", "name": "Karma", "title": "a Iluminada"},
            "Karthus": {"id": 30, "key": "Karthus", "name": "Karthus", "title": "a Voz Mortal"},
            "Kassadin": {"id": 38, "key": "Kassadin", "name": "Kassadin", "title": "o Andarilho do Vazio"},
            "Katarina": {"id": 55, "key": "Katarina", "name": "Katarina", "title": "a Lâmina Sinistra"},
            "Kayle": {"id": 10, "key": "Kayle", "name": "Kayle", "title": "a Julgadora"},
            "Kennen": {"id": 85, "key": "Kennen", "name": "Kennen", "title": "o Coração da Tempestade"},
            "Khazix": {"id": 121, "key": "Khazix", "name": "Kha'Zix", "title": "o Ceifador do Vazio"},
            "Kindred": {"id": 203, "key": "Kindred", "name": "Kindred", "title": "os Caçadores Eternos"},
            "KogMaw": {"id": 96, "key": "KogMaw", "name": "Kog'Maw", "title": "a Boca do Abismo"},
            "Leblanc": {"id": 7, "key": "Leblanc", "name": "LeBlanc", "title": "a Falsa"},
            "LeeSin": {"id": 64, "key": "LeeSin", "name": "Lee Sin", "title": "o Monge Cego"},
            "Leona": {"id": 89, "key": "Leona", "name": "Leona", "title": "a Alvorada Radiante"},
            "Lissandra": {"id": 127, "key": "Lissandra", "name": "Lissandra", "title": "a Bruxa Gélida"},
            "Lucian": {"id": 236, "key": "Lucian", "name": "Lucian", "title": "o Purificador"},
            "Lulu": {"id": 117, "key": "Lulu", "name": "Lulu", "title": "a Fada Feiticeira"},
            "Lux": {"id": 99, "key": "Lux", "name": "Lux", "title": "a Dama da Luz"},
            "Malphite": {"id": 54, "key": "Malphite", "name": "Malphite", "title": "o Fragmento do Monolito"},
            "Malzahar": {"id": 90, "key": "Malzahar", "name": "Malzahar", "title": "o Profeta do Vazio"},
            "Maokai": {"id": 57, "key": "Maokai", "name": "Maokai", "title": "o Ente Retorcido"},
            "MasterYi": {"id": 11, "key": "MasterYi", "name": "Master Yi", "title": "o Espadachim Wuju"},
            "MissFortune": {
                "id": 21,
                "key": "MissFortune",
                "name": "Miss Fortune",
                "title": "a Caçadora de Recompensas"
            },
            "MonkeyKing": {"id": 62, "key": "MonkeyKing", "name": "Wukong", "title": "o Macaco Rei"},
            "Mordekaiser": {"id": 82, "key": "Mordekaiser", "name": "Mordekaiser", "title": "o Revenã de Ferro"},
            "Morgana": {"id": 25, "key": "Morgana", "name": "Morgana", "title": "o Anjo Caído"},
            "Nami": {"id": 267, "key": "Nami", "name": "Nami", "title": "a Conjuradora das Marés"},
            "Nasus": {"id": 75, "key": "Nasus", "name": "Nasus", "title": "o Curador das Areias"},
            "Nautilus": {"id": 111, "key": "Nautilus", "name": "Nautilus", "title": "o Titã das Profundezas"},
            "Nidalee": {"id": 76, "key": "Nidalee", "name": "Nidalee", "title": "a Caçadora Bestial"},
            "Nocturne": {"id": 56, "key": "Nocturne", "name": "Nocturne", "title": "o Eterno Pesadelo"},
            "Nunu": {"id": 20, "key": "Nunu", "name": "Nunu", "title": "o Domador de Yetis"},
            "Olaf": {"id": 2, "key": "Olaf", "name": "Olaf", "title": "o Berserker"},
            "Orianna": {"id": 61, "key": "Orianna", "name": "Orianna", "title": "a Donzela Mecânica"},
            "Pantheon": {"id": 80, "key": "Pantheon", "name": "Pantheon", "title": "o Artesão da Guerra"},
            "Poppy": {"id": 78, "key": "Poppy", "name": "Poppy", "title": "Guardiã do Martelo"},
            "Quinn": {"id": 133, "key": "Quinn", "name": "Quinn", "title": "as Asas de Demacia"},
            "Rammus": {"id": 33, "key": "Rammus", "name": "Rammus", "title": "o Tatu Blindado"},
            "RekSai": {"id": 421, "key": "RekSai", "name": "Rek'Sai", "title": "a Escavadora do Vazio"},
            "Renekton": {"id": 58, "key": "Renekton", "name": "Renekton", "title": "o Carniceiro das Areias"},
            "Rengar": {"id": 107, "key": "Rengar", "name": "Rengar", "title": "o Acossador da Alcateia"},
            "Riven": {"id": 92, "key": "Riven", "name": "Riven", "title": "a Exilada"},
            "Rumble": {"id": 68, "key": "Rumble", "name": "Rumble", "title": "a Ameaça Mecânica"},
            "Ryze": {"id": 13, "key": "Ryze", "name": "Ryze", "title": "o Mago Fugitivo"},
            "Sejuani": {"id": 113, "key": "Sejuani", "name": "Sejuani", "title": "a Ira do Inverno"},
            "Shaco": {"id": 35, "key": "Shaco", "name": "Shaco", "title": "o Bufão Demoníaco"},
            "Shen": {"id": 98, "key": "Shen", "name": "Shen", "title": "o Olho do Crepúsculo"},
            "Shyvana": {"id": 102, "key": "Shyvana", "name": "Shyvana", "title": "a Meio-Dragão"},
            "Singed": {"id": 27, "key": "Singed", "name": "Singed", "title": "o Químico Louco"},
            "Sion": {"id": 14, "key": "Sion", "name": "Sion", "title": "o Colosso Morto-Vivo"},
            "Sivir": {"id": 15, "key": "Sivir", "name": "Sivir", "title": "a Mestra da Batalha"},
            "Skarner": {"id": 72, "key": "Skarner", "name": "Skarner", "title": "a Vanguarda de Cristal"},
            "Sona": {"id": 37, "key": "Sona", "name": "Sona", "title": "a Mestra das Cordas"},
            "Soraka": {"id": 16, "key": "Soraka", "name": "Soraka", "title": "a Filha das Estrelas"},
            "Swain": {"id": 50, "key": "Swain", "name": "Swain", "title": "o Mestre da Estratégia"},
            "Syndra": {"id": 134, "key": "Syndra", "name": "Syndra", "title": "a Soberana Sombria"},
            "TahmKench": {"id": 223, "key": "TahmKench", "name": "Tahm Kench", "title": "o Rei do Rio"},
            "Talon": {"id": 91, "key": "Talon", "name": "Talon", "title": "a Sombra da Lâmina"},
            "Taric": {"id": 44, "key": "Taric", "name": "Taric", "title": "o Cavaleiro das Gemas"},
            "Teemo": {"id": 17, "key": "Teemo", "name": "Teemo", "title": "o Explorador Veloz"},
            "Thresh": {"id": 412, "key": "Thresh", "name": "Thresh", "title": "o Guardião das Correntes"},
            "Tristana": {"id": 18, "key": "Tristana", "name": "Tristana", "title": "a Artilheira Yordle"},
            "Trundle": {"id": 48, "key": "Trundle", "name": "Trundle", "title": "o Rei dos Trolls"},
            "Tryndamere": {"id": 23, "key": "Tryndamere", "name": "Tryndamere", "title": "o Rei Bárbaro"},
            "TwistedFate": {"id": 4, "key": "TwistedFate", "name": "Twisted Fate", "title": "o Mestre das Cartas"},
            "Twitch": {"id": 29, "key": "Twitch", "name": "Twitch", "title": "o Semeador da Peste"},
            "Udyr": {"id": 77, "key": "Udyr", "name": "Udyr", "title": "o Andarilho Espiritual"},
            "Urgot": {"id": 6, "key": "Urgot", "name": "Urgot", "title": "o Orgulho Desumano"},
            "Varus": {"id": 110, "key": "Varus", "name": "Varus", "title": "a Flecha da Vingança"},
            "Vayne": {"id": 67, "key": "Vayne", "name": "Vayne", "title": "a Caçadora Noturna"},
            "Veigar": {"id": 45, "key": "Veigar", "name": "Veigar", "title": "o Pequeno Mestre do Mal"},
            "Velkoz": {"id": 161, "key": "Velkoz", "name": "Vel'Koz", "title": "o Olho do Vazio"},
            "Vi": {"id": 254, "key": "Vi", "name": "Vi", "title": "a Defensora de Piltover"},
            "Viktor": {"id": 112, "key": "Viktor", "name": "Viktor", "title": "o Arauto das Máquinas"},
            "Vladimir": {"id": 8, "key": "Vladimir", "name": "Vladimir", "title": "o Sanguinário Escarlate"},
            "Volibear": {"id": 106, "key": "Volibear", "name": "Volibear", "title": "o Rugido do Trovão"},
            "Warwick": {"id": 19, "key": "Warwick", "name": "Warwick", "title": "o Caçador Sanguinário"},
            "Xerath": {"id": 101, "key": "Xerath", "name": "Xerath", "title": "o Mago Ascendente"},
            "XinZhao": {"id": 5, "key": "XinZhao", "name": "Xin Zhao", "title": "o Senescal de Demacia"},
            "Yasuo": {"id": 157, "key": "Yasuo", "name": "Yasuo", "title": "o Imperdoável"},
            "Yorick": {"id": 83, "key": "Yorick", "name": "Yorick", "title": "o Coveiro"},
            "Zac": {"id": 154, "key": "Zac", "name": "Zac", "title": "a Arma Secreta"},
            "Zed": {"id": 238, "key": "Zed", "name": "Zed", "title": "o Mestre das Sombras"},
            "Ziggs": {"id": 115, "key": "Ziggs", "name": "Ziggs", "title": "o Especialista em Hexplosivos"},
            "Zilean": {"id": 26, "key": "Zilean", "name": "Zilean", "title": "o Guardião do Tempo"},
            "Zyra": {"id": 143, "key": "Zyra", "name": "Zyra", "title": "a Ascensão dos Espinhos"}
        }

        $scope.championList.data = []
        for (var key in xxx) {
            $scope.championList.data.push(xxx[key]);
        }

        console.log($scope.championList.data);
    };

    $scope.loadChamps();
}]);