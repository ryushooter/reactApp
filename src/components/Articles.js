import { useAuth } from "../context/authContext";
import { CardArticle } from "./CardArticle";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";


export function Articles() {

    const {handleChangeArticles,handleSubmitArticles,saveArticles} = useAuth()

    
   
    return <body class="bg-gray-100 h-screen antialiased ">
   

        <Navbar/>

{/*etiqueta apertura cierre tarjetas y sidebar */}  
        <div class="py-6 md:max-w-5xl mx-auto flex mb-4 w-full h-4/6 ">
        
        {/*div que contiene todos los input  */}  

    
    <aside class="mx-auto w-1/3  rounded shadow-lg h-5/6  bg-white overflow-scroll ">

    {/*div que contiene el titulo */}      
 <div class="flex items-center justify-between px-5 py-4 bg-white">
   <h1 class="text-lg leading-none font-medium">Añadir articulo</h1>
   
  </div>
  
  <form className="" onSubmit={handleSubmitArticles}>
    <div class="px-5 ">
      <label class="block mb-4">
        <div class="text-sm text-gray-600 font-medium mb-1">Titulo del articulo</div>
        <input type="text" class="border border-gray-400 w-full rounded px-2 py-1" name="title" onChange={handleChangeArticles}/>
      </label>
      <label class="block mb-4">
        <div class="text-sm text-gray-600 font-medium mb-1">Primer autor</div>
        <input type="text" class="border border-gray-400 w-full rounded px-2 py-1" name="firstAutor" onChange={handleChangeArticles}/>
      </label>
      <label class="block mb-4">
        <div class="text-sm text-gray-600 font-medium mb-1">Segundo autor</div>
        <input type="text" class="border border-gray-400 w-full rounded px-2 py-1" name="secondAutor" onChange={handleChangeArticles} />
      </label>
      <label class="block mb-4">
        <div class="text-sm text-gray-600 font-medium mb-1">tercer autor</div>
        <input type="text" class="border border-gray-400 w-full rounded px-2 py-1" name="thirdAutor" onChange={handleChangeArticles}/>
      </label>

      <label class="block mb-4">
        <div class="text-sm text-gray-600 font-medium mb-1">Palabra clave</div>
        <input type="text" class="border border-gray-400 w-full rounded px-2 py-1" name="firstKeyWord" onChange={handleChangeArticles}/>
      </label>

      <label class="block mb-4">
        <div class="text-sm text-gray-600 font-medium mb-1">Palabra clave</div>
        <input type="text" class="border border-gray-400 w-full rounded px-2 py-1" name="secondKeyWord" onChange={handleChangeArticles}/>
      </label>

      <label class="block mb-4">
        <div class="text-sm text-gray-600 font-medium mb-1">Palabra clave</div>
        <input type="text" class="border border-gray-400 w-full rounded px-2 py-1" name="thirdKeyWord" onChange={handleChangeArticles} />
      </label>
      
      
    </div>
    
    <div class=" justify-end flex px-5 py-3 shadow-inner">
      <div class="-mx-1">     
       
        <button class="mx-1 bg-indigo-600 text-white text-sm font-medium px-3 py-2 rounded">Añadir</button>
      </div>
    </div>
  </form>
  </aside>


{/*contenedor de las tarjetas */}  

            <div className="flex flex-col w-full">
            
            {saveArticles.map(saveArticle => {
                
                return <CardArticle title={saveArticle.title}  firstAutor={saveArticle.firstAutor} secondAutor={saveArticle.secondAutor} thirdAutor={saveArticle.thirdAutor} firstKeyWord={saveArticle.firstKeyWord} secondKeyWord={saveArticle.secondKeyWord}  thirdKeyWord={saveArticle.thirdKeyWord} id={saveArticle.id} />
            })}

            
            
            
            
           
 {/*etiqueta cierre contenedor de las tarjetas */}             
            </div>
            
{/*etiqueta cierre tarjetas y sidebar */}  
        </div>

        <Footer /> 

</body>




          

    

        
   

}