import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import type { Product } from "@/pages/Index";

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const mockProducts: Product[] = [
  // Овощи
  {
    id: 1,
    name: "Помидоры черри",
    price: 180,
    category: "Овощи",
    image: "/placeholder.svg",
    isNew: true,
  },
  {
    id: 2,
    name: "Огурцы свежие",
    price: 120,
    category: "Овощи",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Морковь",
    price: 85,
    category: "Овощи",
    image: "/placeholder.svg",
    discount: 10,
  },
  // Фрукты
  {
    id: 4,
    name: "Яблоки Антоновка",
    price: 120,
    category: "Фрукты",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Бананы",
    price: 95,
    category: "Фрукты",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Апельсины",
    price: 140,
    category: "Фрукты",
    image: "/placeholder.svg",
    discount: 15,
  },
  // Молочная продукция
  {
    id: 7,
    name: "Молоко органическое 3.2%",
    price: 89,
    category: "Молочная продукция",
    image: "/placeholder.svg",
    isNew: true,
  },
  {
    id: 8,
    name: "Творог домашний 9%",
    price: 145,
    category: "Молочная продукция",
    image: "/placeholder.svg",
    discount: 20,
  },
  {
    id: 9,
    name: "Сметана 20%",
    price: 125,
    category: "Молочная продукция",
    image: "/placeholder.svg",
  },
  // Мясная продукция
  {
    id: 10,
    name: "Куриное филе охлажденное",
    price: 350,
    category: "Мясная продукция",
    image: "/placeholder.svg",
  },
  {
    id: 11,
    name: "Говядина вырезка",
    price: 680,
    category: "Мясная продукция",
    image: "/placeholder.svg",
  },
  // Колбасные изделия
  {
    id: 12,
    name: "Колбаса Докторская",
    price: 320,
    category: "Колбасные изделия",
    image: "/placeholder.svg",
  },
  {
    id: 13,
    name: "Сосиски Молочные",
    price: 280,
    category: "Колбасные изделия",
    image: "/placeholder.svg",
    discount: 12,
  },
  // Рыба
  {
    id: 14,
    name: "Семга слабосоленая",
    price: 890,
    category: "Рыба",
    image: "/placeholder.svg",
  },
  {
    id: 15,
    name: "Скумбрия копченая",
    price: 245,
    category: "Рыба",
    image: "/placeholder.svg",
  },
  // Хлебобулочные изделия
  {
    id: 16,
    name: "Хлеб ржаной цельнозерновой",
    price: 65,
    category: "Хлебобулочные изделия",
    image: "/placeholder.svg",
    discount: 15,
  },
  {
    id: 17,
    name: "Батон нарезной",
    price: 45,
    category: "Хлебобулочные изделия",
    image: "/placeholder.svg",
  },
  // Выпечка
  {
    id: 18,
    name: "Круассаны с шоколадом",
    price: 180,
    category: "Выпечка",
    image: "/placeholder.svg",
    isNew: true,
  },
  {
    id: 19,
    name: "Булочки с маком",
    price: 35,
    category: "Выпечка",
    image: "/placeholder.svg",
  },
  // Кондитерские изделия
  {
    id: 20,
    name: "Торт Наполеон",
    price: 450,
    category: "Кондитерские изделия",
    image: "/placeholder.svg",
  },
  {
    id: 21,
    name: "Печенье овсяное",
    price: 120,
    category: "Кондитерские изделия",
    image: "/placeholder.svg",
    discount: 25,
  },
  // Мороженое
  {
    id: 22,
    name: "Мороженое Пломбир",
    price: 89,
    category: "Мороженое",
    image: "/placeholder.svg",
  },
  {
    id: 23,
    name: "Эскимо в шоколаде",
    price: 65,
    category: "Мороженое",
    image: "/placeholder.svg",
  },
  // Полуфабрикаты
  {
    id: 24,
    name: "Пельмени домашние",
    price: 285,
    category: "Полуфабрикаты",
    image: "/placeholder.svg",
  },
  {
    id: 25,
    name: "Котлеты куриные",
    price: 320,
    category: "Полуфабрикаты",
    image: "/placeholder.svg",
  },
  // Продукты из Казахстана
  {
    id: 26,
    name: "Казахский курт",
    price: 150,
    category: "Продукты из Казахстана",
    image: "/placeholder.svg",
    isNew: true,
  },
  {
    id: 27,
    name: "Баурсаки",
    price: 95,
    category: "Продукты из Казахстана",
    image: "/placeholder.svg",
  },
  // Бакалея
  {
    id: 28,
    name: "Греча ядрица",
    price: 110,
    category: "Бакалея",
    image: "/placeholder.svg",
  },
  {
    id: 29,
    name: "Масло подсолнечное",
    price: 165,
    category: "Бакалея",
    image: "/placeholder.svg",
    discount: 18,
  },
  {
    id: 30,
    name: "Макароны спагетти",
    price: 85,
    category: "Бакалея",
    image: "/placeholder.svg",
  },
];

const categories = [
  "Все товары",
  "Овощи",
  "Фрукты",
  "Полуфабрикаты",
  "Мороженое",
  "Кондитерские изделия",
  "Рыба",
  "Молочная продукция",
  "Мясная продукция",
  "Колбасные изделия",
  "Выпечка",
  "Хлебобулочные изделия",
  "Продукты из Казахстана",
  "Бакалея",
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
