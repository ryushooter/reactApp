import { useAuth } from "../context/authContext"

export function CardArticle({title,firstAutor,secondAutor,thirdAutor,firstKeyWord,secondKeyWord,thirdKeyWord,id}){


    const {deleteArticles} = useAuth()

    return <div class="flex-1 p-3">
    <div class="max-w-sm w-full lg:max-w-full shadow px-6 py-6 bg-white rounded-lg mb-6">
        <div class="flex justify-between mb-4">
            <div class="mb-2 text-left">
                <h2 class="mb-2 text-gray-900 font-bold uppercase">{title}</h2>
                
                <ul className="flex gap-2">
                    <li>{firstAutor}</li>
                    <li>{secondAutor}</li>
                    <li>{thirdAutor}</li>
                </ul>
                
            </div>
            <div class="text-right">
            <i class="leading-none text-3xl font-light text-gray-500 hover:text-gray-700" onClick={() => deleteArticles(id)}>&times;</i>
            </div>
        </div>
        <div class="">

        <h2 class="mb-2 text-gray-900 font-bold ">Palabras clave</h2>
        <ul className="flex gap-2">
                    <li>{firstKeyWord}</li>
                    <li>{secondKeyWord}</li>
                    <li>{thirdKeyWord}</li>
                </ul>
                
        </div>
    </div>                                        
</div>
}