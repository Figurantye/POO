"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringo = exports.incremental = exports.explicito = exports.implicito = void 0;
var semana;
(function (semana) {
    semana[semana["segunda"] = 0] = "segunda";
    semana[semana["terca"] = 1] = "terca";
    semana[semana["quarta"] = 2] = "quarta";
    semana[semana["quinta"] = 3] = "quinta";
    semana[semana["sexta"] = 4] = "sexta";
    semana[semana["sabado"] = 5] = "sabado";
    semana[semana["domingo"] = 6] = "domingo";
})(semana || (semana = {}));
console.log(semana.quarta);
var cores;
(function (cores) {
    cores["vermelho"] = "#FF0000";
    cores["verde"] = "00FF00";
    cores["azul"] = "0000FF";
})(cores || (cores = {}));
console.log(cores.azul);
var direcoes;
(function (direcoes) {
    direcoes[direcoes["norte"] = 0] = "norte";
    direcoes[direcoes["sul"] = 1] = "sul";
    direcoes[direcoes["leste"] = 2] = "leste";
    direcoes[direcoes["oeste"] = 3] = "oeste";
})(direcoes || (direcoes = {}));
for (var direcao in direcoes) {
    console.log(direcao);
}
var implicito;
(function (implicito) {
    implicito[implicito["blue"] = 0] = "blue";
    implicito[implicito["yellow"] = 1] = "yellow";
    implicito[implicito["orange"] = 2] = "orange";
    implicito[implicito["red"] = 3] = "red";
})(implicito || (exports.implicito = implicito = {}));
var explicito;
(function (explicito) {
    explicito[explicito["blue"] = 10] = "blue";
    explicito[explicito["yellow"] = 14] = "yellow";
    explicito[explicito["orange"] = 7] = "orange";
    explicito[explicito["red"] = 20] = "red";
})(explicito || (exports.explicito = explicito = {}));
var incremental;
(function (incremental) {
    incremental[incremental["blue"] = 2] = "blue";
    incremental[incremental["yellow"] = 3] = "yellow";
    incremental[incremental["orange"] = 4] = "orange";
    incremental[incremental["red"] = 5] = "red";
})(incremental || (exports.incremental = incremental = {}));
var stringo;
(function (stringo) {
    stringo["blue"] = "blue";
    stringo["yellow"] = "yellow";
    stringo["orange"] = "orange";
    stringo["red"] = "red";
})(stringo || (exports.stringo = stringo = {}));
