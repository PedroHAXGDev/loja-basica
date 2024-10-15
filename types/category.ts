import { Subcategory } from "./subcategory";

export type Category = {
    id: number;
    title: string;
    cover: string;
    subcategory: Subcategory[];
}