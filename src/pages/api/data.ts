// pages/api/products.ts

import { NextApiRequest, NextApiResponse } from "next";
import data from "../../data.json";
interface Product {
  id: number;
  product_name: string;
  brand: string;
  price: string;
  quantity: string;
  total: string;
  status: string;
}

interface ProductsResponse {
  products: Product[];
}

const productsData: ProductsResponse = data;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductsResponse | { message: string }>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Simulate a delay to mimic real-world scenarios
    await new Promise((resolve) => setTimeout(resolve, 1000));
    res.status(200).json(productsData);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
