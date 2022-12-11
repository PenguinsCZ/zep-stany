import stan1 from "../../assets/3t6_stan.jpg"
import Image from 'next/image'

function Stan3t6() {
    return ( <div className="max-w-sm rounded-3xl bg-gray-200 shadow-xl border-solid">
        <div className="bg-gray-700 h-1"></div>
        <Image className="w-full" src={stan1}/>
        <div className="px-6 py-4">
            <p className="text-gray-700 ">Nabízíme kvalitní party stany pro akce všeho druhu - od svateb po akce pro veřejnost.</p>
        </div>
    </div> );
}

export default Stan3t6;