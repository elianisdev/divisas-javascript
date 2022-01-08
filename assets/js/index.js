
const factoresMoneda = {
    'USD': {
        'USD': 1,
        'MXN': 20.51,
        'COP': 4064.83,
        'EUR': 0.88,
        'GBP': 0.74,
    },
    'MXN': {
        'USD': 0.049,
        'MXN': 1,
        'COP': 198.16,
        'EUR': 0.043,
        'GBP': 0.036,
    },
    'COP': {
        'USD': 0.00024,
        'MXN': 0.0050,
        'COP': 1,
        'EUR': 0.00022,
        'GBP': 0.00018,
    },
    'EUR': {
        'USD': 1.13,
        'MXN': 23.18,
        'COP': 4592.65,
        'EUR': 1,
        'GBP': 0.84,
    },
    'GBP': {
        'USD': 1.35,
        'MXN': 27.62,
        'COP': 5473.30,
        'EUR': 1.19,
        'GBP': 1,
    },
};

function convertirMoneda(factorConversionOriginal, factorConversionExtranjera, cantidadAConvertir) {
    let resultado = factoresMoneda[factorConversionOriginal][factorConversionExtranjera] * cantidadAConvertir;
    return resultado;
}

function darFormato(valor) {
    return parseFloat(valor).toFixed(2);
}

document.getElementById('currency-form').addEventListener('submit', function (event) {
    // no refrescar al enviar formulario
    event.preventDefault();

    const monedaOriginalSelect = document.getElementById('original');
    const monedaExtranjeraSelect = document.getElementById('extranjera');
    const cantidadInput = document.getElementById('cantidad');

    const resultado = convertirMoneda(
        monedaOriginalSelect.value,
        monedaExtranjeraSelect.value,
        cantidadInput.value
    );
    document.getElementById('resultado').value = darFormato(resultado);
});