function PaymentMethods() {
  return (
    <section id="pagos" className="seccion">
      <h2>Medios de Pago</h2>
      <div className="medios-pago neon">
        <div className="pago-item">
          <span>💳 VISA</span>
          <span>Tarjetas de crédito</span>
        </div>
        <div className="pago-item">
          <span>🏦 Banco</span>
          <span>Transferencia</span>
        </div>
        <div className="pago-item">
          <span>🅿️ PayPal</span>
          <span>Pagos internacionales</span>
        </div>
      </div>
    </section>
  );
}
export default PaymentMethods;
