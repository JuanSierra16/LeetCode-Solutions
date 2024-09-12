/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let freqMap = {};

    // Contamos las frecuencias de las letras en la magazine
    for (let char of magazine) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    // Revisamos si ransomNote puede ser construido con magazine
    for (let char of ransomNote) {
        if (!freqMap[char] || freqMap[char] === 0) {
            return false; // Si la letra no está o no hay suficientes, retorna false
        }
        freqMap[char]--; // Usamos una letra de la magazine
    }

    return true; // Si todas las letras de ransomNote están presentes, retorna true
};
