import axios from'axios'



export const GET_LIST_KONTAK = "GET_LIST_KONTAK";

export const getListkontak = () => {
    return (dispatch)=>{

        // loading
        dispatch({
            type:GET_LIST_KONTAK,
            payload:{
                loading:true,
                data:false,
                errorMessage: false
            }
        })

        // getAPi

        axios({
            method:'GET',
            url: 'http://localhost:3000/datanya',
            timeout:12000
        }).then((response)=>{
            // jika berhasil
            dispatch({
                type:GET_LIST_KONTAK,
                payload:{
                    loading:false,
                    data:response.data,
                    errorMessage: false
                }
            })


        }).catch((error)=>{
            //jika gagal 
            dispatch({
                type:GET_LIST_KONTAK,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage: error.message
                }
            })
        })
    }
}