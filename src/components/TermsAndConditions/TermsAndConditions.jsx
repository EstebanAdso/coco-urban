import React from 'react'

export const TermsAndConditions = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-16 mt-40">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    <span className="border-b-4 border-amber-200 pb-2">Términos y Condiciones</span>
                </h1>

                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <p className="text-gray-700 mb-8 leading-relaxed">
                        Bienvenido a <span className="font-semibold text-amber-600">Coco Urban</span>. Al acceder y realizar compras en nuestro sitio web, aceptas los siguientes términos y condiciones. Por favor, léelos detenidamente antes de realizar tu compra.
                    </p>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                                <span className="text-amber-200 mr-2">
                                    <i className="bi bi-cart-check"></i>
                                </span>
                                1. Proceso de Compra
                            </h2>
                            <ul className="space-y-3 text-gray-700 pl-6">
                                <li className="list-disc">Al realizar un pedido, recibirás un correo de confirmación.</li>
                                <li className="list-disc">Los precios están en pesos colombianos (COP) e incluyen IVA.</li>
                                <li className="list-disc">Nos reservamos el derecho de limitar cantidades de compra.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                                <span className="text-amber-200 mr-2">
                                    <i className="bi bi-credit-card"></i>
                                </span>
                                2. Pagos
                            </h2>
                            <p className="text-gray-700 mb-2">
                                Aceptamos los siguientes métodos de pago:
                            </p>
                            <ul className="space-y-2 text-gray-700 pl-6 mb-4">
                                <li className="list-disc">Tarjetas de crédito y débito</li>
                                <li className="list-disc">Transferencias bancarias</li>
                                <li className="list-disc">Pago contra entrega (solo en ciertas zonas)</li>
                            </ul>
                            <p className="text-gray-700">
                                Los precios pueden variar sin previo aviso. El pago se procesará una vez confirmada la disponibilidad del producto.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                                <span className="text-amber-200 mr-2">
                                    <i className="bi bi-truck"></i>
                                </span>
                                3. Envíos
                            </h2>
                            <ul className="space-y-3 text-gray-700 pl-6">
                                <li className="list-disc">Realizamos envíos a todo Colombia.</li>
                                <li className="list-disc">Los tiempos de entrega varían según la ubicación.</li>
                                <li className="list-disc">Los costos de envío se calcularán al finalizar la compra.</li>
                                <li className="list-disc">Para envíos internacionales, contáctanos directamente.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                                <span className="text-amber-200 mr-2">
                                    <i className="bi bi-arrow-repeat"></i>
                                </span>
                                4. Devoluciones y Cambios
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Aceptamos devoluciones dentro de los 3 días siguientes a la recepción del producto, siempre y cuando:
                            </p>
                            <ul className="space-y-2 text-gray-700 pl-6 mb-4">
                                <li className="list-disc">El producto esté en su empaque original</li>
                                <li className="list-disc">No haya sido usado ni dañado</li>
                                <li className="list-disc">Se presente la factura de compra</li>
                            </ul>
                            <p className="text-gray-700">
                                Los gastos de envío por devolución corren por cuenta del cliente, a menos que el producto presente fallas de fábrica.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                                <span className="text-amber-200 mr-2">
                                    <i className="bi bi-shield-lock"></i>
                                </span>
                                5. Privacidad
                            </h2>
                            <p className="text-gray-700">
                                Respetamos tu privacidad. Toda la información personal que nos proporciones será utilizada de acuerdo con nuestra Política de Privacidad.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                                <span className="text-amber-200 mr-2">
                                    <i className="bi bi-info-circle"></i>
                                </span>
                                6. Información Adicional
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Los productos pueden variar ligeramente de las imágenes mostradas en el sitio web debido a la configuración de los monitores.
                            </p>
                            <p className="text-gray-700">
                                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                                <span className="text-amber-200 mr-2">
                                    <i className="bi bi-telephone"></i>
                                </span>
                                Contáctanos
                            </h2>
                            <p className="text-gray-700">
                                Si tienes alguna pregunta sobre estos términos y condiciones, no dudes en contactarnos:
                            </p>
                            <p className="text-gray-700">
                                Teléfono: <a href="https://wa.me/573108873636?text=Vengo%20de%20la%20página%20de%20Coco%20Urban%20y%20me%20interesa%20adquirir%20un%20producto." className="text-amber-600 hover:underline">+57 310 887 3636</a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
