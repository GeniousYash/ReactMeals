import classes from './AvailableMealsSummary.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const Dummy_Meals = [
    {
        id: 'n1',
        name: 'Shushi',
        description: 'Finest Fish And Veggies',
        price: 22.99,
    },
    {
        id: 'n2',
        name: 'Schnitzel',
        description: 'A Germen Speciality!',
        price: 16.5,
    },
    {
        id: 'n3',
        name: 'Barbecue Burger',
        description: 'American Raw Meaty!',
        price: 12.99,
    },
    {
        id: 'n4',
        name: 'Green Bowl',
        description: 'Healty...and green...',
        price: 18.99,
    },
]

const AvailableMeals=()=>{
    const mealsList = Dummy_Meals.map(meal => <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);

    return <section className={classes.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
    </section>
}

export default AvailableMeals;