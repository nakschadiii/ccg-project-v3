import Default from "../wrappers/Default";
import Header from '../comps/Header/Main';
import Desc from "../comps/Boutiques/DescSection/Main";
import { horaires } from "../config/horaires";
import { renseignements } from "../config/rensei";
import { colors } from "../config/colors";
import ContactSection from "../comps/Boutiques/ContactSection/Main";
import Services from "../comps/Boutiques/ServicesSection/Main";
import services from "../config/services";
import Links from "../comps/Links";
import { HeaderButton } from "../comps/Header/HeaderButton";

const button = <HeaderButton key={btoa(Math.random())} color={colors.sevres} to={'/contact'}>
    Contactez-nous
</HeaderButton>
const data = {
    title: "Sèvres - Copycat Group",
    color: colors.sevres,
    header : {
        bg: '/banners/sevres.svg',
        logo: '/logo/Logo comptoir Sèvres.png',
        rows : [
            <>Retrouvez notre boutique COPYCAT Sèvres avec un service de Photocopie reprographie et impression numérique.</>,
            button
        ],
    }
}

export default function Sevres() {

    return <Default value={data}>
        <Header />
        <Desc
            horaires={horaires?.Sèvres}
            renseignements={renseignements?.Sèvres}
            desc={"Découvrez Copycat Sèvres, votre boutique de référence pour les fournitures de bureau et les services d'impression. Située au cœur de Sèvres, notre équipe dévouée vous propose une large sélection de produits de qualité et des services personnalisés pour répondre à tous vos besoins professionnels. Faites confiance à notre expertise et à notre engagement envers la satisfaction client pour une expérience d'achat agréable et des solutions documentaires sur mesure."}
            title={"Copycat Sèvres"}
            photo={"/photos/Image 72.png"} />
        <Services
            services={services.sevres} />
        <Links title={'Commandez en ligne'} links={[
            { img: '/photos/Fournitures.png', text: 'Commandez vos fournitures de bureau', link: 'https://www.copycat.vous-livre.com/', color: colors.shop },
            { img: '/photos/IT-Multimédia.png', text: 'Choisissez vos écrans et bornes interactives', link: 'https://copycat-group.mydigitalcorner.fr/', color: colors.shop },
            { img: '/photos/Informatique.png', text: 'Commandez vos fournitures informatiques', link: 'https://copycat-shop.fr/', color: colors.shop },
            { img: '/photos/Supports imprimés.png', text: 'Imprimez vos supports de communications', link: 'http://www.copycatprint.fr/accueil/', color: colors.print }
        ]} />
        {/* <Realisations
            realisations={realisations.Sèvres}
            color={colors.sevres} />
        <SocialSection
            color={colors.sevres} /> */}
        <ContactSection
            page={"Sèvres"}
            mapUrl="https://maps.google.com/maps?q=copycat%20sevre&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            color={colors.sevres} />
    </Default>
}

// crée comp ContactSection