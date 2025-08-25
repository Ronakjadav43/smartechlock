import {  HomeData, Menutype } from "@/types/common";
import { axiosInstance } from "@/utils";

export const getMenu = async (): Promise<Menutype[]> => {
  try {
    const res = await axiosInstance.get(
      `/menus?populate=*`
      // `/menus?populate[sub_menus][populate]=*&sort[0]=id`
    );
    return res.data.data;
  } catch (err) {
    throw err;
  }
};

export const getHome = async (slug: string): Promise<HomeData[]> => {
  try {
    const res = await axiosInstance.get(
      `/pages?filters[slug][$eq]=${slug}&populate[section][populate][section_items][populate]=*&populate[section][populate][type][populate]=*`,
      // `/pages?filters[slug][$eq]=home&&populate[section][populate][section_items][populate]=*`
    );
    return res.data.data;
  } catch (err) {
    throw err;
  }
};

// export const getHomeData = async (): Promise<HomeData> => {
//   try {
//     const res = await axiosInstance.get(`/pages?filters[title][$eq]=Home`);
//     return res.data.data;
//   } catch (err) {
//     throw err;
//   }
// };
