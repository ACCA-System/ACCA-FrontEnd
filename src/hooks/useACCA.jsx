import { useContext } from 'react'
import ACCAContext from '../context/ACCAProvider'

const useACCA = () => {
    return useContext(ACCAContext)
}

export default useACCA;