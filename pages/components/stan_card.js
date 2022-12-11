import stan1 from "../../assets/partystan.jpg"
import Image from 'next/image'

function StanCard() {
    return ( <div className="max-w-sm rounded-3xl bg-gray-200 shadow-xl border-solid">
        <div className="bg-gray-700 h-1"></div>
        <Image className="w-full" src={stan1}/>
        <div className="px-6 py-4">
            <p className="text-gray-700 ">Stan 5x8 metru, ideální jako </p>
        </div>
    </div> );
}

export default StanCard;