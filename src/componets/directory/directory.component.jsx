import CategoryItem from "../CategoryItem/category-item.component";

const Directory = ({categories}) => {
    return <div className='categories-container'>
        {categories.map(category => {
            return <CategoryItem category={category} key={category.id}></CategoryItem>
        })}
    </div>
}

export default Directory;
