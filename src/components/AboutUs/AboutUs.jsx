import React from 'react'

export const AboutUs = () => {
    return (
        <section className="py-20 bg-white mt-40">
            <div className="max-w-6xl mx-auto px-6">
                {/* Encabezado */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        <span className="border-b-4 border-amber-200 pb-2">
                            Quiénes Somos
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        En Coco Urban entendemos que la moda es más que una tendencia: es una forma de expresar identidad, confianza y estilo de vida.
                    </p>
                </div>

                {/* Contenido Principal */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <p className="text-gray-700 leading-relaxed">
                            Por eso ofrecemos una experiencia única en calzado y ropa urbana y deportiva, pensada para quienes buscan calidad, comodidad y diseño en cada detalle.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nuestro catálogo incluye zapatos importados triple A para dama, caballero y niño, junto con una línea especializada en calzado deportivo para futsal y guayos. También disponemos de ropa para caballero y pronto ampliaremos nuestras colecciones con prendas exclusivas para mujer y niños, consolidando una propuesta completa para toda la familia.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                            Nuestros Pilares
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                                        <i className="fas fa-star text-black"></i>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Calidad Superior</h4>
                                    <p className="text-gray-600">Seleccionamos cuidadosamente cada producto.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                                        <i className="fas fa-tshirt text-black"></i>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Estilo Actual</h4>
                                    <p className="text-gray-600">Fusionando moda urbana y deportiva.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                                        <i className="fas fa-handshake text-black"></i>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Confianza</h4>
                                    <p className="text-gray-600">Brindando atención cercana y compromiso con nuestros clientes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Misión */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-10 shadow-xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl font-semibold mb-6">Nuestra Misión</h3>
                        <p className="text-gray-200 leading-relaxed">
                            Ser un referente en moda urbana y deportiva, ofreciendo productos que inspiren a cada persona a vestir con autenticidad y seguridad. En Coco Urban, no solo eliges qué ponerte: eliges cómo quieres vivir tu estilo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
