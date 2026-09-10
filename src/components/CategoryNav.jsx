const CategoryNav = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="category-nav">
      <button
        className={selectedCategory === "All" ? "active" : ""}
        onClick={() => onCategoryChange("All")}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "active" : ""}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryNav;