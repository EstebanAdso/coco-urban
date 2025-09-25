import React from 'react'

export const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-16 mt-40">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    <span className="border-b-4 border-amber-200 pb-2">Política de Privacidad</span>
                </h1>

                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        En <span className="font-semibold text-amber-600">Coco Urban</span> nos comprometemos a proteger tu privacidad. Esta política explica cómo recopilamos, usamos, compartimos y protegemos tu información personal.
                    </p>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                                <span className="text-amber-200 mr-2">
                                    <i className="bi bi-shield-lock"></i>
                                </span>
                                Información que recopilamos
                            </h2>
                            <ul className="space-y-3 text-gray-700 pl-6">
                                <li className="list-disc">Información de contacto (nombre, correo electrónico, teléfono)</li>
                                <li className="list-disc">Información de pago (procesada de forma segura a través de nuestros proveedores de pago)</li>
                                <li className="list-disc">Dirección de envío</li>
                                <li className="list-disc">Historial de compras</li>
                                <li className="list-disc">Datos de navegación y preferencias</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                                <span className="text-amber-200 mr-2">
                                    <i className="bi bi-shield-check"></i>
                                </span>
                                Uso de tu información
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Utilizamos tu información para:
                            </p>
                            <ul className="space-y-2 text-gray-700 pl-6">
                                <li className="list-disc">Procesar tus pedidos y pagos</li>
                                <li className="list-disc">Comunicarnos contigo sobre tu pedido</li>
                                <li className="list-disc">Mejorar nuestros productos y servicios</li>
                                <li className="list-disc">Enviar ofertas y promociones (si nos das tu consentimiento)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                                <span className="text-amber-200 mr-2">
                                    <i className="bi bi-lock"></i>
                                </span>
                                Seguridad de tus datos
                            </h2>
                            <p className="text-gray-700">
                                Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra accesos no autorizados, alteración, divulgación o destrucción de tus datos personales.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                                <span className="text-amber-200 mr-2">
                                    <i className="bi bi-person-gear"></i>
                                </span>
                                Tus derechos
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Tienes derecho a:
                            </p>
                            <ul className="space-y-2 text-gray-700 pl-6">
                                <li className="list-disc">Acceder a tu información personal</li>
                                <li className="list-disc">Solicitar la corrección de datos inexactos</li>
                                <li className="list-disc">Solicitar la eliminación de tus datos</li>
                                <li className="list-disc">Oponerte al procesamiento de tus datos</li>
                                <li className="list-disc">Retirar tu consentimiento en cualquier momento</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                                <span className="text-amber-200 mr-2">
                                    <i className="bi bi-telephone"></i>
                                </span>
                                Contáctanos
                            </h2>
                            <p className="text-gray-700">
                                Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos tu información, contáctanos en:
                            </p>
                            <p className="text-gray-700">
                                Teléfono: <a href="https://wa.me/573108873636" className="text-amber-600 hover:underline">+57 310 887 3636</a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
