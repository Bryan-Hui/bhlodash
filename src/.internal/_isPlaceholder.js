/**
 * @param {*} a 
 */

function _isPlaceholder(a){
    return a != null && tyeof a === 'object' && a['@@functional/placeholder'] === true
}

module.exports = _isPlaceholder