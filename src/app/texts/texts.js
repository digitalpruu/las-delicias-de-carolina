const title = "Las Delicias de Carolina";
const email = "roabrayn205@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3229329960";
const textos = {
    index: {
        title: `${title}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: `En Las Delicias de Carolina, nos especializamos en ofrecer las mejores comidas típicas colombianas, especialmente del Chocó y el Pacífico. También ofrecemos una variedad de productos de panadería que deleitarán tu paladar.`,
        description2: `Te invitamos a probar nuestros platos auténticos y disfrutar de una experiencia culinaria que celebra los sabores tradicionales de nuestra cultura.`,
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "",
            p2: "Comidas típicas colombianas: del Chocó, Pacífico y panadería",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61566547865898&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
