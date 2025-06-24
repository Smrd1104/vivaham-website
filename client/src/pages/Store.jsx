import CollectionContent from '../components/store/CollectionContent'
import Hero from '../components/store/Hero'
import Photos from '../components/store/Photos'
import Forever from '../components/store/Forever'
import SareeCardSection from '../components/store/SareeCardSection'
import JewellCardSection from '../components/store/JewellCardSection'

const Store = () => {
    return (
        <div>
            <Hero />
            <CollectionContent />
            <Photos />
            <SareeCardSection />
            <JewellCardSection />
            <Forever />

        </div>
    )
}

export default Store