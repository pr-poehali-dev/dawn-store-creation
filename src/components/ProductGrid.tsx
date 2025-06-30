import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import type { Product } from "@/pages/Index";

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Молоко органическое 3.2%",
    price: 89,
    category: "Молочные продукты",
    image: "/placeholder.svg",
    isNew: true,
  },
  {
    id: 2,
    name: "Хлеб ржаной цельнозерновой",
    price: 65,
    category: "Хлебобулочные",
    image: "/placeholder.svg",
    discount: 15,
  },
  {
    id: 3,
    name: "Яблоки Антоновка",
    price: 120,
    category: "Фрукты",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Куриное филе охлажденное",
    price: 350,
    category: "Мясо",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Творог домашний 9%",
    price: 145,
    category: "Молочные продукты",
    image: "/placeholder.svg",
    discount: 20,
  },
  {
    id: 6,
    name: "Помидоры черри",
    price: 180,
    category: "Овощи",
    image: "/placeholder.svg",
    isNew: true,
  },
];

const categories = [
  "Все товары",
  "Молочные продукты",
  "Хлебобулочные",
  "Фрукты",
  "Мясо",
  "Овощи",
];

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  return (
    <div>
      {/* Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-rubik">
          Категории
        </h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Все товары" ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Special Offers */}
      <div className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              🔥 Акции и скидки
            </h3>
            <p className="text-gray-600">
              Специальные предложения только сегодня!
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Смотреть все
          </Button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <Card
            key={product.id}
            className="group hover:shadow-lg transition-shadow duration-200 border-gray-100"
          >
            <CardContent className="p-4">
              <div className="relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg bg-gray-100"
                />
                <div className="absolute top-2 left-2 flex gap-2">
                  {product.isNew && (
                    <Badge className="bg-green-500 hover:bg-green-600">
                      НОВИНКА
                    </Badge>
                  )}
                  {product.discount && (
                    <Badge variant="destructive">-{product.discount}%</Badge>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-500">{product.category}</p>
                <h3 className="font-semibold text-gray-900 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {product.discount ? (
                      <>
                        <span className="text-lg font-bold text-gray-900">
                          {Math.round(
                            product.price * (1 - product.discount / 100),
                          )}{" "}
                          ₽
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                          {product.price} ₽
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-gray-900">
                        {product.price} ₽
                      </span>
                    )}
                  </div>
                </div>

                <Button
                  onClick={() => onAddToCart(product)}
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                >
                  <Icon name="Plus" size={16} className="mr-2" />В корзину
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
