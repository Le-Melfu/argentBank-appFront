import iconchat from '../../assets/img/icon-chat.png'
import iconmoney from '../../assets/img/icon-money.png'
import iconsecurity from '../../assets/img/icon-security.png'
import FeatureItem from '../molecules/featureItem'

const FeaturesSection = () => {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <FeatureItem
                image={iconchat}
                imageAlt="Chat Icon"
                title="You are our #1 priority"
                desc="Need to talk to a representative? You can get in touch
                    through our 24/7 chat or through a phone call in less than 5
                    minutes."
            />
            <FeatureItem
                image={iconmoney}
                imageAlt="Money Icon"
                title="More savings means higher rates"
                desc="The more you save with us, the higher your interest rate
                    will be!"
            />
            <FeatureItem
                image={iconsecurity}
                imageAlt="Security Icon"
                title="Security you can trust"
                desc="We use top of the line encryption to make sure your data and
                    money is always safe."
            />
        </section>
    )
}

export default FeaturesSection
