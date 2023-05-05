// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from "../../../data/gensor";

const getData = (req, res) => {
  return res.json(data);
};
export default getData;
