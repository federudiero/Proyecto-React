import { useEffect, useState } from "react"
import React  from 'react'
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom';


let productos=[
  {

    id:'1',
    nombre:'Notebook ASUS',
    price:'$50000',
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/KENC231A/1000x1000-KENC231A.jpg&w=500&q=100',
    
  },
  
  {

    id:'2',
    nombre:'Notebook ASUS VivoBook',
    price:'$40000' ,
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_609622-MLA48061947613_102021-F.webp',
    
  } ,
  
  {

    id:'3',
    nombre:'Notebook ASUS VivoBook2',
    price:'$60000',
    description:"otebook Asus VivoBook X513EA negra 15.6, Intel Core i7 1165G7 16GB de RAM 512GB SSD, Intel Iris Xe Graphics G7 96EUs 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_671953-MLA48632493165_122021-F.webp',
    
  } ,
  {

    id:'4',
    nombre:'Notebook Gamer AORUS',
    price:'$340.000' ,
    description:"Notebook Gamer AORUS KD 15.6 Core I7 11800H 16GB (2x8GB) 512GB SSD NVMe RTX 3060 240Hz W11 ",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30650_Notebook_Gamer_AORUS_KD_15.6__Core_I7_11800H_16GB__2x8GB__512GB_SSD_NVMe_RTX_3060_240Hz_W11_02c902ce-grn.jpg',
    
  } ,
  {

    id:'5',
    nombre:'Notebook Lenovo',
    price:'$ 62.830' ,
    description:"Notebook Lenovo 14 AMD Pro A4 4350B 4GB 500GB Freedos",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_24158_Notebook_Lenovo_14__AMD_Pro_A4_4350B_4GB_500GB_Freedos_28a58e50-grn.jpg',
    
    
  } ,
  {

    id:'6',
    nombre:'Notebook ASUS ROG ZEPHYRUS',
    price:'$ 350.000' ,
    description:"Notebook ASUS ROG ZEPHYRUS 14 WQHD RYZEN 9 4900HS 16GB 1TB SSD NVMe RTX 2060",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26535_Notebook_ASUS_ROG_ZEPHYRUS_14__WQHD_RYZEN_9_4900HS_16GB_1TB_SSD_NVMe_RTX_2060_b8ffd6ee-grn.jpg',
    
  } ,
  {

    id:'7',
    nombre:'Notebook Lenovo V15',
    price:'$ 117.200' ,
    description:"Notebook Lenovo V15 15.6 Core I5 1135G7 8GB 1TB HDD Freedos ",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29935_Notebook_Lenovo_V15_15.6__Core_I5_1135G7_8GB_1TB_HDD_Freedos_71103a44-grn.jpg',
    
  } ,
  {

    id:'8',
    nombre:'Notebook Gamer AORUS ',
    price:'$ 385.000' ,
    description:"Notebook Gamer AORUS XD 15.6 Core I7 11800H 16GB (2x8GB) 1TB SSD NVMe RTX 3070 240Hz W11 Home",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30646_Notebook_Gamer_AORUS_XD_15.6__Core_I7_11800H_16GB__2x8GB__1TB_SSD_NVMe_RTX_3070_240Hz_W11_Home_40f94c0d-grn.jpg',
    
  } ,
  {

    id:'9',
    nombre:'Notebook Gamer XPG',
    price:'$ 357.000' ,
    description:"5 fotos Notebook Gamer XPG XENIA 15.6 Core I7 11800H 32GB (2x16GB) 1TB SSD NVMe RTX 3070 165Hz W10",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30001_Notebook_Gamer_XPG_XENIA_15.6__Core_I7_11800H_32GB__2x16GB__1TB_SSD_NVMe_RTX_3070_165Hz_W10_2f82564b-grn.jpg',
    
  } ,
  {

    id:'10',
    nombre:'Notebook HP G8 240',
    price:'55.890' ,
    description:"Notebook HP G8 240 14 Celeron N4020 4GB 500GB HDD W10",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30345_Notebook_HP_G8_240_14__Celeron_N4020_4GB_500GB_HDD_W10_64d30805-grn.jpg',
    
  } ,
  {

    id:'11',
    nombre:'Notebook ASUS UX5401',
    price:'$ 200.000' ,
    description:"Notebook ASUS UX5401 14 Core I5 1135G7 8GB 512GB SSD OLED W10",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30592_Notebook_ASUS_UX5401_14__Core_I5_1135G7_8GB_512GB_SSD_OLED_W10_f059b8fd-grn.jpg',
    
  } ,
  {

    id:'12',
    nombre:'Notebook ASUS ZenBook DUO TOUCH',
    price:'$300000' ,
    description:"Notebook ASUS ZenBook DUO TOUCH UX482 14  Core I7 1165G7 16GB 1TB SSD NVMe MX450 Screen Pad PLUS 12.65" ,
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30572_Notebook_ASUS_ZenBook_DUO_TOUCH_UX482_14__Core_I7_1165G7_16GB_1TB_SSD_NVMe_MX450_Screen_Pad_PLUS_12.65__W10_edf29905-grn.jpg',
    
  } ,
  {

    id:'13',
    nombre:'Notebook ASUS ZenBook',
    price:'$ 177.780' ,
    description:"Notebook ASUS ZenBook UX425 14 Core I5 1135G7 8GB 512GB SSD W10",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30529_Notebook_ASUS_ZenBook_UX425_14__Core_I5_1135G7_8GB_512GB_SSD_W10_68211288-grn.jpg',
    
  } ,
  {

    id:'14',
    nombre:'Notebook Gamer ASUS ROG ZEPHYRUS',
    price:'$275000' ,
    description:"Notebook Gamer ASUS ROG ZEPHYRUS G14 14 Ryzen 7 5800HS 16GB (2x8GB) 512GB SSD RTX 3050 144Hz W10",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30570_Notebook_Gamer_ASUS_ROG_ZEPHYRUS_G14_14__Ryzen_7_5800HS_16GB__2x8GB__512GB_SSD_RTX_3050_144Hz_W10_2d7b6e2b-grn.jpg',
    
  } ,
  {

    id:'15',
    nombre:'Notebook Gamer Acer NITRO',
    price:'$270000' ,
    description:"Notebook Gamer Acer NITRO 5 15.6  Core I5 10300H 8GB 1TB HDD GTX1650 W11 Home",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31309_Notebook_Gamer_Acer_NITRO_5_15.6__Core_I5_10300H_8GB_1TB_HDD_GTX1650_W11_Home_b12c2cc8-grn.jpg',
    
  } ,
  {

    id:'16',
    nombre:'Notebook Gamer ASUS ROG ZEPHYRUS',
    price:'$ 281.000' ,
    description:"Notebook Gamer ASUS ROG ZEPHYRUS G14 14 Ryzen 7 5800HS 16GB (2x8GB) 512GB SSD RTX 3050 144Hz W10 ANIME MATRIX",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30568_Notebook_Gamer_ASUS_ROG_ZEPHYRUS_G14_14__Ryzen_7_5800HS_16GB__2x8GB__512GB_SSD_RTX_3050_144Hz_W10_ANIME_MATRIX_5d444937-grn.jpg',
    
  } ,

   ]

function ItemDetailContainer() {
   
    const [productoDetail , setProductoDetail] =useState([]);
    const {id} =useParams();
       
    useEffect(() => {
 
          
   
            const computadora= new Promise((res,rej)=>{
              setTimeout(()=>
              {(!id)? res(productos) : res(productos.find(item=>item.id==id))
              },2000)
            })
            computadora
            .then((res)=>{
                setProductoDetail(res)
            })
        
          
            .catch((error)=>{
              console.error("error",error)
            })
        
            .finally(()=>{
        
            })
            
          }, [id])
      
          console.log(productoDetail) 
       
           
            


        

  return (
    <div>
       
        
      <ItemDetail productoDetail={productoDetail}/>
        
    </div>
  )
}

export default ItemDetailContainer