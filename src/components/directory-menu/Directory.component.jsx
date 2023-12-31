import CategoryItem from "../category-item/category-item.component";
import './Directory.styles.scss'

export default function Directory({categories}){
    return (
        <div className='categories-container'>
            {categories.map((category)=>(
                <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    )
}