import { useEffect, useState } from "react"
import React  from 'react'
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom';
import {getDoc ,getFirestore,doc, onSnapshot} from 'firebase/firestore'

let productos=[
  {

    id:1,
    category:"notebook",
    nombre:'Notebook ASUS',
    price:50000,
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/KENC231A/1000x1000-KENC231A.jpg&w=500&q=100',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
    
  },
  
  {

    id:2,
    category:"notebook",
   
    category:`Celulares`,
    nombre:'Notebook ASUS VivoBook',

    price:40000 ,
    description:"Notebook Asus ZenBook Pro Duo UX482EG ",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_609622-MLA48061947613_102021-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } ,
  
  {

    id:3,
    category:"notebook",
    nombre:'Notebook ASUS VivoBook2',
    price:60000,
    description:"otebook Asus VivoBook X513EA negra 15.6, Intel Core i7 1165G7 16GB de RAM 512GB SSD, Intel Iris Xe Graphics G7 96EUs 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_671953-MLA48632493165_122021-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } ,
  {

    id:4,
    category:"notebook",
    nombre:'Notebook Gamer AORUS',
    price:340000 ,
    description:"Notebook Gamer AORUS KD 15.6 Core I7 11800H 16GB (2x8GB) 512GB SSD NVMe RTX 3060 240Hz W11 ",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30650_Notebook_Gamer_AORUS_KD_15.6__Core_I7_11800H_16GB__2x8GB__512GB_SSD_NVMe_RTX_3060_240Hz_W11_02c902ce-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } ,
  {

    id:5,
    category:"notebook",
    nombre:'Notebook Lenovo',
    price: 62830 ,
    description:"Notebook Lenovo 14 AMD Pro A4 4350B 4GB 500GB Freedos",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_24158_Notebook_Lenovo_14__AMD_Pro_A4_4350B_4GB_500GB_Freedos_28a58e50-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
    
  } ,
  {

    id:6,
    category:"notebook",
    nombre:'Notebook ASUS ROG ',
    price: 350000 ,
    description:"Notebook ASUS ROG ZEPHYRUS 14 WQHD RYZEN 9 4900HS 16GB 1TB SSD NVMe RTX 2060",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26535_Notebook_ASUS_ROG_ZEPHYRUS_14__WQHD_RYZEN_9_4900HS_16GB_1TB_SSD_NVMe_RTX_2060_b8ffd6ee-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } ,
  {

    id:7,
    category:"notebook",
    nombre:'Notebook Lenovo V15',
    price:117200,
    description:"Notebook Lenovo V15 15.6 Core I5 1135G7 8GB 1TB HDD Freedos ",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29935_Notebook_Lenovo_V15_15.6__Core_I5_1135G7_8GB_1TB_HDD_Freedos_71103a44-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } ,
  {

    id:8,
    category:"notebook",
    nombre:'Notebook Gamer AORUS ',
    price:385000 ,
    description:"Notebook Gamer AORUS XD 15.6 Core I7 11800H 16GB (2x8GB) 1TB SSD NVMe RTX 3070 240Hz W11 Home",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30646_Notebook_Gamer_AORUS_XD_15.6__Core_I7_11800H_16GB__2x8GB__1TB_SSD_NVMe_RTX_3070_240Hz_W11_Home_40f94c0d-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } ,
  {

    id:9,
    category:"notebook",
    nombre:'Notebook Gamer XPG',
    price:357000,
    description:"5 fotos Notebook Gamer XPG XENIA 15.6 Core I7 11800H 32GB (2x16GB) 1TB SSD NVMe RTX 3070 165Hz W10",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30001_Notebook_Gamer_XPG_XENIA_15.6__Core_I7_11800H_32GB__2x16GB__1TB_SSD_NVMe_RTX_3070_165Hz_W10_2f82564b-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } ,
  {

    id:10,
    category:"notebook",
    nombre:'Notebook HP G8 240',
    price:55890,
    description:"Notebook HP G8 240 14 Celeron N4020 4GB 500GB HDD W10",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30345_Notebook_HP_G8_240_14__Celeron_N4020_4GB_500GB_HDD_W10_64d30805-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } ,
  {

    id:11,
    category:"notebook",
    nombre:'Notebook ASUS ',
    price: 200000 ,
    description:"Notebook ASUS UX5401 14 Core I5 1135G7 8GB 512GB SSD OLED W10",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30592_Notebook_ASUS_UX5401_14__Core_I5_1135G7_8GB_512GB_SSD_OLED_W10_f059b8fd-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } ,
  {

    id:12,
    category:"notebook",
    nombre:'Notebook ASUS ZenBook DUO TOUCH',
    price:300000 ,
    description:"Notebook ASUS ZenBook DUO TOUCH UX482 14  Core I7 1165G7 16GB 1TB SSD NVMe MX450 Screen Pad PLUS 12.65" ,
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30572_Notebook_ASUS_ZenBook_DUO_TOUCH_UX482_14__Core_I7_1165G7_16GB_1TB_SSD_NVMe_MX450_Screen_Pad_PLUS_12.65__W10_edf29905-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } ,
  {

    id:13,
    category:"notebook",
    nombre:'Notebook ASUS ZenBook',
    price: 177780 ,
    description:"Notebook ASUS ZenBook UX425 14 Core I5 1135G7 8GB 512GB SSD W10",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30529_Notebook_ASUS_ZenBook_UX425_14__Core_I5_1135G7_8GB_512GB_SSD_W10_68211288-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } ,
  {

    id:14,
    category:"notebook",
    nombre:'Notebook Gamer ASUS ROG ',
    price:275000,
    description:"Notebook Gamer ASUS ROG ZEPHYRUS G14 14 Ryzen 7 5800HS 16GB (2x8GB) 512GB SSD RTX 3050 144Hz W10",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30570_Notebook_Gamer_ASUS_ROG_ZEPHYRUS_G14_14__Ryzen_7_5800HS_16GB__2x8GB__512GB_SSD_RTX_3050_144Hz_W10_2d7b6e2b-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } ,
  {

    id:15,
    category:"notebook",
    nombre:'Notebook Gamer Acer NITRO',
    price:270000 ,
    description:"Notebook Gamer Acer NITRO 5 15.6  Core I5 10300H 8GB 1TB HDD GTX1650 W11 Home",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31309_Notebook_Gamer_Acer_NITRO_5_15.6__Core_I5_10300H_8GB_1TB_HDD_GTX1650_W11_Home_b12c2cc8-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } ,
  {

    id:16,
    category:"notebook",
    nombre:'Notebook Gamer ASUS ROG ',
    price:281000 ,
    description:"Notebook Gamer ASUS ROG ZEPHYRUS G14 14 Ryzen 7 5800HS 16GB (2x8GB) 512GB SSD RTX 3050 144Hz W10 ANIME MATRIX",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30568_Notebook_Gamer_ASUS_ROG_ZEPHYRUS_G14_14__Ryzen_7_5800HS_16GB__2x8GB__512GB_SSD_RTX_3050_144Hz_W10_ANIME_MATRIX_5d444937-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } ,
  {

    id:17,
    category:"celulares" ,
    nombre:'Samsung Galaxy S22 ',
    price:209999 ,
    description:"Dispositivo liberado para que elijas la compañía telefónica que prefieras, Pantalla Dynamic AMOLED 2X de 6.8,Cámara delantera de 40Mpx.,Batería de 5000mAh ,Memoria interna de 256GB ,Tarjeta eSIM incluida.",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } ,
  {

    id:18,
    category:"celulares" ,
    nombre:'Motorola Edge 20 Lite ',
    price:72.999 ,
    description:"Dispositivo liberado para que elijas la compañía telefónica que prefieras, Pantalla Dynamic AMOLED 2X de 6.8,Cámara delantera de 40Mpx.,Batería de 5000mAh ,Memoria interna de 256GB ,Tarjeta eSIM incluida.Compatible con redes 5G.Pantalla OLED de 6.7,Pantalla OLED de 6.7.Cámara delantera de 32Mpx.Procesador MediaTek Dimensity 720 Octa-Core de 2GHz con 6GB de RAM",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_833619-MLA48233725917_112021-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } ,
  {

    id:19,
    category:"celulares" ,
    nombre:'Moto G60s 128',
    price:54999,
    description:"Dispositivo liberado para que elijas la compañía telefónica que prefieras.Pantalla IPS de 6.8.Tiene 4 cámaras traseras de 64Mpx/8Mpx/5Mpx/2Mpx.Cámara delantera de 16Mpx.Procesador MediaTek MT6382 Helio G95 Octa-Core de 2.05GHz con 6GB de RAM.Batería de 5000mAh.Memoria interna de 128GB.Resistente a las salpicaduras.Con reconocimiento facial y sensor de huella dactilar.Resistente al polvo.",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_788340-MLA48112659213_112021-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } ,
  {

    id:20,
    category:"celulares" ,
    nombre:'Samsung Galaxy S20 ' ,
    price:89999 ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } 
  ,
  {

    id:21,
    category:"celulares" ,
    nombre:'Samsung Galaxy S21 ' ,
    price:104999,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_730981-MLA48800008115_012022-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } 
  ,
  {

    id:22,
    category:"celulares" ,
    nombre:'Samsung Galaxy A52 ' ,
    price:75999 ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_655998-MLA49203110816_022022-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } 
  ,
  {

    id:23,
    category:"celulares" ,
    nombre:'Xiaomi Redmi 9A '   ,
    price:28226 ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_981867-MLA48770610134_012022-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } 
  ,
  {

    id:24,
    category:"celulares" ,
    nombre:'Samsung Galaxy Z ' ,
    price:118999 ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_740721-MLA47886660486_102021-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } 
  ,
  {

    id:25,
    category:"celulares" ,
    nombre:'Moto G71 ' ,
    price:62299 ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_867710-MLA49272373785_032022-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } 
  ,
  {

    id:26,
    category:"celulares" ,
    nombre:'Motorola Edge  ' ,
    price:119999 ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_625169-MLA48113209394_112021-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } 
  ,
  {

    id:27,
    category:"celulares" ,
    nombre:'Samsung Galaxy S20' ,
    price:45999 ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_863356-MLA48697556226_122021-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } 
  ,
  {

    id:28,
    category:"celulares" ,
    nombre:'Moto G41  ' ,
    price:44.999 ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_711274-MLA49535290493_032022-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } 
  ,
  {

    id:29,
    category:"celulares" ,
    nombre:'Moto G41  ' ,
    price:44999 ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_997241-MLA49460481867_032022-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    stock:5,
  } 
  ,
  {

    id:30,
    category:"televisores" ,
    nombre:'Smart TV Samsung Series 7' ,
    price:94499,
    description:`Su resolución es 4K.
    Tecnología HDR para una calidad de imagen mejorada.
    Modo de sonido: Dolby Digital Plus, Q-Symphony.
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Tiene función Screen Share.
    Con Web browser, Gallery, Netflix, Prime Video, Apple TV, YouTube.
    Sistema operativo Tizen.
    Memoria interna de 128GB.
    Conectá tus dispositivos mediante sus 3 puertos HDMI y su puerto USB.
    Con sistema de cables ocultos.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_787221-MLA48007684849_102021-O.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_926763-MLA48007684848_102021-O.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_830070-MLA48007797646_102021-O.webp',
    stock:5,
  } 
  ,
  {

    id:31,
    category:"televisores" ,
    nombre:'Smart TV Philips 6800 ' ,
    price:37599 ,
    description:`Su resolución es 4K.
    Tecnología HDR para una calidad de imagen mejorada.
    Modo de sonido: Dolby Digital Plus, Q-Symphony.
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Tiene función Screen Share.
    Con Web browser, Gallery, Netflix, Prime Video, Apple TV, YouTube.
    Sistema operativo Tizen.
    Memoria interna de 128GB.
    Conectá tus dispositivos mediante sus 3 puertos HDMI y su puerto USB.
    Con sistema de cables ocultos.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_686081-MLA47203370323_082021-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_913876-MLA47203370324_082021-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_662836-MLA47203310523_082021-F.webp',
    stock:5,
  } 
  ,
  {
    id:32,
    category:"televisores" ,
    nombre:'Smart TV Samsung ' ,
    price:44999 ,
    description:`Su resolución es 4K.
    Tecnología HDR para una calidad de imagen mejorada.
    Modo de sonido: Dolby Digital Plus, Q-Symphony.
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Tiene función Screen Share.
    Con Web browser, Gallery, Netflix, Prime Video, Apple TV, YouTube.
    Sistema operativo Tizen.
    Memoria interna de 128GB.
    Conectá tus dispositivos mediante sus 3 puertos HDMI y su puerto USB.
    Con sistema de cables ocultos.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_934496-MLA45625835121_042021-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_866369-MLA45625835123_042021-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_691846-MLA45625835122_042021-F.webp',
    stock:5,
  } 
  ,
  {

    id:33,
    category:"televisores" ,
    nombre:'Smart TV Philips ' ,
    price:90999 ,
    description:`Su resolución es 4K.
    Tecnología HDR para una calidad de imagen mejorada.
    Modo de sonido: Dolby Digital Plus, Q-Symphony.
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Tiene función Screen Share.
    Con Web browser, Gallery, Netflix, Prime Video, Apple TV, YouTube.
    Sistema operativo Tizen.
    Memoria interna de 128GB.
    Conectá tus dispositivos mediante sus 3 puertos HDMI y su puerto USB.
    Con sistema de cables ocultos.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_745854-MLA48622828334_122021-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_736407-MLA48622828333_122021-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_733298-MLA48622693993_122021-F.webp',
    stock:5,
  } 
  ,
  {

    id:34,
    category:"televisores" ,
    nombre:'Smart TV Noblex' ,
    price:78999 ,
    description:`Su resolución es 4K.
    Tecnología HDR para una calidad de imagen mejorada.
    Modo de sonido: Dolby Digital Plus, Q-Symphony.
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Tiene función Screen Share.
    Con Web browser, Gallery, Netflix, Prime Video, Apple TV, YouTube.
    Sistema operativo Tizen.
    Memoria interna de 128GB.
    Conectá tus dispositivos mediante sus 3 puertos HDMI y su puerto USB.
    Con sistema de cables ocultos.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_805661-MLA40717932054_022020-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_677957-MLA40717932053_022020-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_604229-MLA40717932052_022020-F.webp',
    stock:5,
  } 
  ,
  {

    id:35,
    category:"televisores" ,
    nombre:'Smart TV TCL' ,
    price:94499 ,
    description:`Su resolución es 4K.
    Tecnología HDR para una calidad de imagen mejorada.
    Modo de sonido: Dolby Digital Plus, Q-Symphony.
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Tiene función Screen Share.
    Con Web browser, Gallery, Netflix, Prime Video, Apple TV, YouTube.
    Sistema operativo Tizen.
    Memoria interna de 128GB.
    Conectá tus dispositivos mediante sus 3 puertos HDMI y su puerto USB.
    Con sistema de cables ocultos.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_930913-MLA45370840431_032021-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_753706-MLA45370840433_032021-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_613809-MLA45370894337_032021-F.webp',
    stock:5,
  } 
  ,
  {

    id:36,
    category:"televisores" ,
    nombre:'Smart TV RCA ' ,
    price:88999 ,
    description:`Su resolución es 4K.
    Tecnología HDR para una calidad de imagen mejorada.
    Modo de sonido: Dolby Digital Plus, Q-Symphony.
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Tiene función Screen Share.
    Con Web browser, Gallery, Netflix, Prime Video, Apple TV, YouTube.
    Sistema operativo Tizen.
    Memoria interna de 128GB.
    Conectá tus dispositivos mediante sus 3 puertos HDMI y su puerto USB.
    Con sistema de cables ocultos.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_752157-MLA40931045887_022020-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_679502-MLA40931045921_022020-F.webp',
    stock:5,
    
  } 
  ,
  {

    id:37,
    category:"televisores" ,
    nombre:'Smart TV TCL  ' ,
    price:51999 ,
    description:`Su resolución es 4K.
    Tecnología HDR para una calidad de imagen mejorada.
    Modo de sonido: Dolby Digital Plus, Q-Symphony.
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Tiene función Screen Share.
    Con Web browser, Gallery, Netflix, Prime Video, Apple TV, YouTube.
    Sistema operativo Tizen.
    Memoria interna de 128GB.
    Conectá tus dispositivos mediante sus 3 puertos HDMI y su puerto USB.
    Con sistema de cables ocultos.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_668788-MLA48269756154_112021-F.webp',
   stock:5,
    
  } 
  ,
  {

    id:38,
    category:"televisores" ,
    nombre:'Smart TV Noblex ' ,
    price:36434 ,
    description:`Su resolución es 4K.
    Tecnología HDR para una calidad de imagen mejorada.
    Modo de sonido: Dolby Digital Plus, Q-Symphony.
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Tiene función Screen Share.
    Con Web browser, Gallery, Netflix, Prime Video, Apple TV, YouTube.
    Sistema operativo Tizen.
    Memoria interna de 128GB.
    Conectá tus dispositivos mediante sus 3 puertos HDMI y su puerto USB.
    Con sistema de cables ocultos.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_750880-MLA43970540786_112020-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_616130-MLA43978478153_112020-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_700229-MLA43978478219_112020-F.webp',
    stock:5,
  } 
  ,
  {

    id:39,
    category:"televisores" ,
    nombre:'Smart TV LG AI' ,
    price:75249 ,
    description:`Su resolución es 4K.
    Tecnología HDR para una calidad de imagen mejorada.
    Modo de sonido: Dolby Digital Plus, Q-Symphony.
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Tiene función Screen Share.
    Con Web browser, Gallery, Netflix, Prime Video, Apple TV, YouTube.
    Sistema operativo Tizen.
    Memoria interna de 128GB.
    Conectá tus dispositivos mediante sus 3 puertos HDMI y su puerto USB.
    Con sistema de cables ocultos.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_753214-MLA48707187900_122021-F.webp',
    pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_617268-MLA48707503015_122021-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_811638-MLA48707260662_122021-F.webp',
    stock:5,
  } 
  ,
  {

    id:40,
    category:"televisores" ,
    nombre:'Smart TV RCA ' ,
    price:34999 ,
    description:`Su resolución es 4K.
    Tecnología HDR para una calidad de imagen mejorada.
    Modo de sonido: Dolby Digital Plus, Q-Symphony.
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Tiene función Screen Share.
    Con Web browser, Gallery, Netflix, Prime Video, Apple TV, YouTube.
    Sistema operativo Tizen.
    Memoria interna de 128GB.
    Conectá tus dispositivos mediante sus 3 puertos HDMI y su puerto USB.
    Con sistema de cables ocultos.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_737400-MLA43269941631_082020-F.webp',
    pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_821170-MLA43247215220_082020-F.webp',
stock:5,
    
  } 

  
  


   ]
function ItemDetailContainer() {
   
    const [productoDetail , setProductoDetail] =useState([]);
    const {id} =useParams([]);
    
   
       
    useEffect(() => {
           const db = getFirestore();
           const productRef=doc(db,'productos',id)
           getDoc(productRef).then((snapshot)=>{
            setProductoDetail({...snapshot.data(),id:snapshot.id})

           }).catch((error)=>{
            console.log(error)
          }).finally(()=>{
            console.log("finalizo ")
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