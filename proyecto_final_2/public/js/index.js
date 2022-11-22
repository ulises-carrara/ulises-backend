const getProduct = async ()=>{
    try {
        const response = await fetch("/api/products")
        const products = await response.json()
        return products
    } catch (error) {
        console.log(error);
    }
}


const renderProduct = async ()=>{
    const container = document.getElementById("container")
    const products = await getProduct()

    container.innerHTML = products.map(products =>
         `<ul>    
            <li>${products.title}</li>
        </ul>` ).join(" ")
        
} 

const getProductbtn = document.getElementById("getProductbtn")

getProductbtn.addEventListener('click', renderProduct)