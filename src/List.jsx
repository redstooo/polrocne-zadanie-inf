import PropTypes from "prop-types";


function List(props){

    const category = props.category;
    const itemList = props.items;



    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // sortne to podla mena

    // fruits.sort((a, b) => a.calories - b.calories); // sortne to podla kalórii

    // const lowCalFruits = fruits.filter(fruit => fruit.calories <= 100); // spraví to nove pole ktore bude mat iba ovocia s menej alebo rovné 100 kaloriam
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100); // spravi to nove pole ktore bude mat iba ovocia viac ako 100 kalorii

    const listItems = itemList.map(item => <li key={item.id}>{item.name} - {item.calories} calories</li>);

    return( <>
        <h2 className="category">{category}</h2>
        <ol className="list">{listItems}</ol>
    </> 
    );


}

List.defaultProps = {
    category: "Unknown",
    items: []
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}

export default List