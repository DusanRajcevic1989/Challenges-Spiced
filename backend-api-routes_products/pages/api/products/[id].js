import { getProductById } from "../../../services/productServices";

export default function handler(req, res) {
  const { id } = req.query;
  if (!id) {
    res.status(404).json({ status: "Page not found!" });
  } else {
    res.status(200).json(getProductById(id));
  }
}
