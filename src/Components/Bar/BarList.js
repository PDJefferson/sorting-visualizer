import Bar from "./Bar";
const BarList = (props) => {
  return props.items.map((item, index) => (
    <Bar key={index} id={index} item={item} size={props.items.length} />
  ));
};
export default BarList;
