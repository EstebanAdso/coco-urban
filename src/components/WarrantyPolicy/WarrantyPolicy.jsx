import React from 'react'

export const WarrantyPolicy = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-16 mt-40">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    <span className="border-b-4 border-amber-200 pb-2">Políticas de Garantía</span>
                </h1>

                {/* Introducción */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <p className="text-gray-700 leading-relaxed">
                        En <span className="font-semibold text-amber-600">Coco Urban</span> trabajamos con productos importados de alta calidad y queremos que tu experiencia sea siempre la mejor. Por eso, todos nuestros artículos cuentan con garantía legal contra defectos de fabricación.
                    </p>
                </div>

                {/* Secciones de garantía */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Plazo de garantía */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                            <span className="text-amber-200 mr-2">
                                <i className="fas fa-clock"></i>
                            </span>
                            Plazo de Garantía
                        </h2>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <i className="fas fa-check text-amber-500 mt-1 mr-2"></i>
                                <span>30 días calendario desde la fecha de entrega del producto.</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check text-amber-500 mt-1 mr-2"></i>
                                <span>Posible extensión en casos especiales de defectos de fabricación evidentes (sujeto a evaluación).</span>
                            </li>
                        </ul>
                    </div>

                    {/* Condiciones */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                            <span className="text-amber-200 mr-2">
                                <i className="fas fa-shield-alt"></i>
                            </span>
                            Condiciones
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold text-gray-800 mb-2">La garantía aplica en caso de:</p>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>Defectos de costura, pegado o acabados</li>
                                    <li>Imperfecciones en materiales o insumos</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800 mb-2">No cubre:</p>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>Daños por uso indebido</li>
                                    <li>Desgaste natural del producto</li>
                                    <li>Daños accidentales</li>
                                    <li>Manipulación por terceros</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Procedimiento */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                            <span className="text-amber-200 mr-2">
                                <i className="fas fa-tasks"></i>
                            </span>
                            Procedimiento
                        </h2>
                        <ol className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="bg-amber-200 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</span>
                                <span>Contacta por WhatsApp con tu número de pedido</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-amber-200 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</span>
                                <span>Envía fotos y descripción del defecto</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-amber-200 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</span>
                                <span>Envío del producto para revisión si es necesario</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-amber-200 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">4</span>
                                <span>Reparación o cambio del producto según evaluación</span>
                            </li>
                        </ol>
                    </div>

                    {/* Tiempos y Costos */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                            <span className="text-amber-200 mr-2">
                                <i className="fas fa-shipping-fast"></i>
                            </span>
                            Tiempos y Costos
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <div className="border-l-4 border-amber-200 pl-4">
                                <h3 className="font-semibold text-gray-800 mb-2">Tiempo de Respuesta</h3>
                                <p>8 a 15 días hábiles una vez recibido el producto</p>
                            </div>
                            <div className="border-l-4 border-amber-200 pl-4">
                                <h3 className="font-semibold text-gray-800 mb-2">Costos de Envío</h3>
                                <ul className="space-y-2">
                                    <li>Garantía válida: Coco Urban asume los costos</li>
                                    <li>Garantía no aplicable: Cliente asume el costo de devolución</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contacto */}
                <div className="bg-amber-100 rounded-lg shadow-lg p-8 mt-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">¿Necesitas hacer válida tu garantía?</h3>
                        <p className="text-gray-700 mb-6">Estamos aquí para ayudarte. Contáctanos a través de cualquiera de nuestros canales de atención.</p>
                        <a href="#" className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full hover:bg-amber-200 hover:text-black transition-colors duration-300">
                            <i className="fab fa-whatsapp mr-2"></i>
                            Contactar por WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
