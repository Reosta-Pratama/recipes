import BtnRound from '@/components/Button/BtnRound'
import { useRouter, useSearchParams } from 'next/navigation'
import { FiX } from 'react-icons/fi'

export const useSearchQuery = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('search')

    return search || ''
}

export const filterItems = (items: any[], search: string) => {
    if (!search) return items
    const lowerSearch = search.toLowerCase()
    return items.filter(item => 
        item.name.toLowerCase().includes(lowerSearch) || 
        item.cuisine.toLowerCase().includes(lowerSearch)
    )
}

export const RemoveFilter = () => {
    const search = useSearchQuery()
    const router = useRouter()

    const handleRemoveFilter = () => {
        router.push('/recipes')
    }

    if (!search) return null

    return (
        <div 
            onClick={handleRemoveFilter}
            className="flex items-center gap-2 cursor-pointer">
            <BtnRound 
                type='button'>
                <FiX />
            </BtnRound>

            <div className='duration-200 ease-in-out hover:text-black'>
                Remove Filter
            </div>
        </div>
    )
}