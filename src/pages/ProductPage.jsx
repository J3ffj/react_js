import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import CategoryNav from "../components/CategoryNav";
import "../App.css";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [searchParams, setSearchParams] = useSearchParams();

    // Read values from URL
    const urlSearch = searchParams.get("search") || "";
    const urlPage = Number(searchParams.get("page")) || 1;

    const [search, setSearch] = useState(urlSearch);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(urlPage);

    const productsPerPage = 8;

    // =========================
    // GET DATA
    // =========================
    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/product/getall"
                );

                const data = await response.json();

                setProducts(data.product || []);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    // =========================
    // SYNC URL -> STATE
    // =========================
    useEffect(() => {
        setSearch(urlSearch);
        setCurrentPage(urlPage);
    }, [urlSearch, urlPage]);

    // =========================
    // CATEGORIES
    // =========================
    const categories = [
        ...new Set(products.map((product) => product.category)),
    ];

    // =========================
    // FILTER
    // =========================
    const filteredProducts = products.filter((product) => {
        const matchName = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        return matchName && matchCategory;
    });

    // =========================
    // PAGINATION
    // =========================
    const totalPages = Math.ceil(
        filteredProducts.length / productsPerPage
    );

    const startIndex = (currentPage - 1) * productsPerPage;

    const currentProducts = filteredProducts.slice(
        startIndex,
        startIndex + productsPerPage
    );

    // =========================
    // SEARCH
    // =========================
    const handleSearch = (value) => {
        setSearch(value);
        setCurrentPage(1);

        setSearchParams({
            search: value,
            page: "1",
        });
    };

    // =========================
    // PAGE CHANGE
    // =========================
    const handlePageChange = (page) => {
        setCurrentPage(page);

        setSearchParams({
            search,
            page: String(page),
        });
    };

    // =========================
    // CATEGORY CHANGE
    // =========================
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);

        setSearchParams({
            search,
            page: "1",
        });
    };

    // =========================
    // LOADING
    // =========================
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="product-page">

            {/* Back button */}
            <div className="back-home-container">
                <Link to="/home" className="back-home">
                    ← Back to Home
                </Link>
            </div>

            {/* Page title */}
            <div className="product-page-header">
                <h1>Our Products</h1>
                <p>Discover our collection of quality products</p>
            </div>

            {/* Search */}
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search product by name..."
                    value={search}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>

            {/* Category */}
            <CategoryNav
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
            />

            {/* Number of products */}
            <p className="product-count">
                {filteredProducts.length} products found
            </p>

            {/* Products */}
            <div className="product-grid">
                {currentProducts.length > 0 ? (
                    currentProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}

        </div>
    );
};

export default ProductPage;