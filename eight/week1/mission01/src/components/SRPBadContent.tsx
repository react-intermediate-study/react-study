import React, { useState, useEffect } from "react";

// Mock 상품 데이터
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "무선 블루투스 이어폰",
    price: 89000,
  },
  {
    id: 2,
    name: "기계식 키보드 (적축)",
    price: 125000,
  },
  {
    id: 3,
    name: "초고속 무선 충전기",
    price: 35000,
  },
];

export const SRPBadContent = () => {
  const [products, setProducts] = useState<typeof MOCK_PRODUCTS>([]);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setProducts(MOCK_PRODUCTS);
      setIsLoading(false);
    }, 800); // 0.8초 딜레이로 로딩 화면 보여주기

    return () => clearTimeout(timer);
  }, []);

  //  검색
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <div className="w-full max-w-md bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="font-bold text-gray-800 mb-3">상품 대시보드 (SRP 위반)</h3>

      <div className="mb-4">
        <input
          type="text"
          placeholder="상품 검색..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-3 min-h-50">
        {isLoading ? (
          <div className="flex items-center justify-center h-full text-sm text-gray-500">
            데이터를 불러오는 중...
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="flex items-center justify-center h-full text-sm text-gray-500">
            검색 결과가 없습니다.
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg bg-gray-50"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800 text-sm">
                  {product.name}
                </span>
                <span className="text-blue-600 font-bold text-sm">
                  {product.price.toLocaleString()}원
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
