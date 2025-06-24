import CollectionContent from '../components/store/CollectionContent'
import Hero from '../components/store/Hero'
import Photos from '../components/store/Photos'
import Forever from '../components/store/Forever'

const Store = () => {
    return (
        <div>
            <Hero />
            <CollectionContent />
            <Photos />
            <Forever />
        </div>
    )
}

export default Store