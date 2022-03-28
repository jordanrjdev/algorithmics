"use strict";
/*
¡La nueva película de "Vengadores" acaba de ser lanzada! Hay mucha gente en la taquilla del cine en una fila enorme. Cada uno de ellos tiene un solo billete de 100, 50 o 25 dólares. Un boleto de "Los Vengadores" cuesta 25 dólares.
Vania trabaja actualmente como empleada y ella quiere vender un boleto a cada persona en la fila.
¿Podrá Vania vender un boleto a cada persona y dar cambio/vuelto si inicialmente no tiene dinero y vende los boletos estrictamente en el orden de la cola de personas?
  
Regresa SI, si Vania puede vender un boleto a cada persona y dar cambio/vuelto con el dinero que tiene a la mano en ese momento. De lo contrario, devuelva NO.
Ejemplo:
tickets([25, 25, 50]) // => SI
tickets([25, 100]) // => NO. Vania no tendra suficiente dinero para dar cambio/vuelto a los 100 dolares
tickets([25, 25, 50, 50, 100]) // => NO. Vania no tendra suficiente dinero para dar 75 dolares de cambio/vuelto (no puedes crear dos billetes de 25 a partir de un billete de 50)
*/
exports.__esModule = true;
exports.canSellTickets = void 0;
var canSellTickets = function (banknotes) {
    var bankNotesVania = [];
    var _loop_1 = function (i) {
        if (banknotes[i] === 25)
            bankNotesVania.push(banknotes[i]);
        if (banknotes[i] === 50) {
            var findBillete25 = findBillete(25, bankNotesVania);
            if (findBillete25 != -1) { // there is a 25 banknote
                bankNotesVania = deleteBankNote(findBillete25, bankNotesVania);
                bankNotesVania.push(banknotes[i]);
            }
            else
                return { value: "NO" };
        }
        if (banknotes[i] === 100) {
            var findBillete50 = findBillete(50, bankNotesVania);
            if (findBillete50 != -1) { // there is a 50 banknote
                bankNotesVania = deleteBankNote(findBillete50, bankNotesVania);
                var findBillete25 = findBillete(25, bankNotesVania);
                if (findBillete25 != -1)
                    bankNotesVania = deleteBankNote(findBillete25, bankNotesVania); // there is a 25 banknote
                else
                    return { value: "NO" };
                bankNotesVania.push(banknotes[i]);
            }
            else {
                var countBillete25 = bankNotesVania.filter(function (billete) { return billete == 25; }).length;
                if (countBillete25 >= 3) { // there are three 25 banknotes
                    var banknotesDeleted_1 = 0;
                    var newMoneyVania_1 = [];
                    bankNotesVania.forEach(function (billete) {
                        if (billete == 25 && banknotesDeleted_1 < 3) {
                            banknotesDeleted_1++;
                        }
                        else
                            newMoneyVania_1.push(billete);
                    });
                    bankNotesVania = newMoneyVania_1;
                    bankNotesVania.push(banknotes[i]);
                }
                else
                    return { value: "NO" };
            }
        }
    };
    for (var i = 0; i < banknotes.length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return "SI";
};
exports.canSellTickets = canSellTickets;
var findBillete = function (type, arr) {
    return arr.findIndex(function (billete) { return billete == type; });
};
var deleteBankNote = function (indexBankNote, arr) {
    arr.splice(indexBankNote, 1);
    return arr;
};
console.log((0, exports.canSellTickets)([25, 25, 50]));
