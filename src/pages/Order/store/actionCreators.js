import axios from 'axios';



// action: 增加选中菜品
const incFood = () => {

};

const fetchFoodData = () => {
    return (dispatch) => {
        axios.get('/').then((res) => {
            if(!res){

            }
        })
    }
};



export {
    incFood,
    fetchFoodData,
}