import axios from "axios";

export const baseURL = "http://localhost:3001"

export const getNewsById = (id) =>{
    return affixProps.get(`${baseURL}/news/${id}`);
}

export const getNewsList = async () => {
    const { data } = await axios.get(`${baseURL}/news`);

    const imageList =[ "/images/banner1.png","/images/banner2.png" ];

    return data.map((i,index)=>({
        ...i,
        image: imageList[index],
    }));
}