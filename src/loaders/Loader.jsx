import axios from 'axios'

const LoadCloth = async ({params})=>{
    let {cloth} = params;

    try{
        let res = await axios.get('http')
        let data = res.json()
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}

export default LoadCloth