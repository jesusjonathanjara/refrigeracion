// src/scripts/paypal.js
export function setupPayPalButton() {
  paypal.Buttons({
    style: {
      color: 'blue',
      shape: 'pill',
      label: 'pay',
      height: 40
    },
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '14.99'
          },
          description: 'Curso Online de Refrigeración'
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        // Redirigir a WhatsApp después del pago exitoso
        window.location.href = "https://wa.me/5491164354069";
      });
    }
  }).render('#paypal-button-container');
}