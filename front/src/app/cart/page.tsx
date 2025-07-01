export default function CartPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tu carrito</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Productos en el carrito */}
        <div className="md:col-span-2 space-y-6">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between bg-white shadow rounded-lg p-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-100 rounded" />
                <div>
                  <h2 className="text-lg font-semibold">Producto #{item}</h2>
                  <p className="text-gray-500">Cantidad: 1</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <p className="text-lg font-bold">$99.99</p>
                <button className="text-red-500 hover:underline cursor-pointer">
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen del carrito */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Resumen</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>$199.98</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Envío</span>
            <span>$5.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>$204.98</span>
          </div>
          <button className="w-full bg-slate-300 text-[var(--black)] py-3 rounded hover:bg-[var(--buttons)] hover:text-gray-50 transition cursor-pointer">
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
}
