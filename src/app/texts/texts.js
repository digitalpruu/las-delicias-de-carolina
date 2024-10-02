const title = "Accesorios Leidy O";
const slogan = "Accesorios y bolsos Leídy O";
const email = "ladyosorio85@hotmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los accesorios de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3208791449";
const textos = {
    index: {
        title: `${title}`,
        slogan: `${slogan}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "En Accesorios Leidy O, nos especializamos en ofrecer bisutería y accesorios de moda que complementan tu estilo único. Desde elegantes collares hasta prácticos bolsos, cada pieza está cuidadosamente seleccionada para ofrecerte lo mejor en diseño y calidad. \n" +
            "Nuestro objetivo es proporcionarte accesorios que no solo realcen tu apariencia, sino que también reflejen tu personalidad. Nos enorgullece ofrecer una variedad de productos que combinan tendencias modernas con toques clásicos, perfectos para cualquier ocasión. \n" +
            "En Accesorios Leidy O, cada accesorio es una declaración de estilo. Ya sea que busques una pieza especial para un evento o un accesorio diario, encontrarás algo que se adapte a tus gustos y necesidades. Explora nuestra colección y descubre cómo nuestros productos pueden agregar un toque de elegancia a tu vida. Confía en Accesorios Leidy O para encontrar bisutería y accesorios de alta calidad que hagan que cada día sea un poco más especial. ¡Estamos aquí para ayudarte a \n" +
            "brillar con estilo! "
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "",
            p2: slogan,
        },
        address: "Dirección del negocio",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61565829870075&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/accesorios_leidy.0?utm_source=qr&igsh=MW5qY2VqZHhoZ2R3aQ%3D%3D",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
