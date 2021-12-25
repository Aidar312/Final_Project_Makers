import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";

import { Input, Pagination, Empty } from "antd";

import { productsContext } from "../../contexts/productsContext";

import Filters from "../Filters/Filters";
import ProductCard from "./ProductCard";

import "./ProductsList.css";

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 4
  );
  const [category, setCategory] = useState(
    searchParams.get("for") ? searchParams.get("for") : ""
  );
  const [price, setPrice] = useState([1, 1000000]);
  const [showFilters, setShowFilters] = useState(false);
  const { getProducts, products, productsTotalCount, getProductsFor } =
    useContext(productsContext);
    const params = useParams();
  useEffect(() => {
    searchParams.set("for", params.for)
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
      price_gte: price[0],
      price_lte: price[1],
      for: category,
    });
  }, []);
  console.log(params);
  useEffect(() => {
    getProductsFor();
  }, [searchParams]);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
      price_gte: price[0],
      price_lte: price[1],
      for: category,
    });
  }, [search, page, limit, price, category]);
  useEffect(() => {
    setCategory(params.for);
    console.log(1);
  }, [params.for]);
  console.log(products);
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="products-search">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "HIDE FILTERS" : "SHOW FILTERS"}
        </div>
        <Input.Search
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "25vw" }}
          placeholder="Search..."
        />
      </div>
      {showFilters ? <Filters price={price} setPrice={setPrice} /> : null}
      <div className="products-list">
        {products.length > 0 ? (
          products.map((item) => <ProductCard item={item} />)
        ) : (
          <Empty style={{ marginBottom: "20px" }} />
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          total={+productsTotalCount}
        />
      </div>
    </div>
  );
};

export default ProductsList;
