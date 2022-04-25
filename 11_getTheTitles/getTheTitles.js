const getTheTitles = function(dicc) {
    let titulos = dicc.reduce((titles, book) => {
        return [...titles, book.title]
    }, [])
    return titulos
};

// Do not edit below this line
module.exports = getTheTitles;
